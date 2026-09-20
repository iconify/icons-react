import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/odhnjvb-z.css';
import '../../css/a/a-b8f211a.css';
import '../../css/b/bqyndnr_m.css';
import '../../css/a/agurgjful.css';

const viewBox = {"width":41,"height":41};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="odhnjvb-z"/><path class="a-b8f211a"/><path class="bqyndnr_m"/><path class="agurgjful"/></g>`,
		"fallback": "streamline-stickies-color:wand",
	});
}

export default Component;
