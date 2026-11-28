import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uuw1qkbsv.css';
import '../../css/g/gex1tzbfc.css';
import '../../css/s/sj304c_0m.css';
import '../../css/i/iukcc49-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uuw1qkbsv"/><path class="gex1tzbfc"/><path class="sj304c_0m"/><path class="iukcc49-p"/></g>`,
		"fallback": "iconaut:monitor-return",
	});
}

export default Component;
