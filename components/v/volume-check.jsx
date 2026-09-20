import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/e/eb0-wdbvb.css';
import '../../css/k/kn39lsemd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="eb0-wdbvb"/><path class="kn39lsemd"/></g>`,
		"fallback": "streamline-cyber:volume-check",
	});
}

export default Component;
