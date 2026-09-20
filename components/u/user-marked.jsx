import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgd2t-wgz.css';
import '../../css/y/yvwmwi2bl.css';
import '../../css/l/lgg4do2ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wgd2t-wgz"/><path class="yvwmwi2bl"/><path class="lgg4do2ns"/></g>`,
		"fallback": "tdesign:user-marked",
	});
}

export default Component;
