import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/t/t_top4b6c.css';
import '../../css/r/rd6wyq7pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="t_top4b6c"/><path class="rd6wyq7pa"/></g>`,
		"fallback": "lets-icons:pointers",
	});
}

export default Component;
