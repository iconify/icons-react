import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/xi9okknii.css';
import '../../css/c/cpb26vb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="xi9okknii"/><path class="cpb26vb2k"/></g>`,
		"fallback": "streamline-cyber:stethoscope",
	});
}

export default Component;
