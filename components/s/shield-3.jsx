import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/d969vxclq.css';
import '../../css/r/rrhs3fo_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="d969vxclq"/><path class="rrhs3fo_f"/></g>`,
		"fallback": "streamline-cyber:shield-3",
	});
}

export default Component;
