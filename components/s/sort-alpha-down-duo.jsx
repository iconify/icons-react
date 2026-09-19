import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/er0c10lxa.css';
import '../../css/a/awmmf-bbh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="er0c10lxa"/><path class="awmmf-bbh"/></g>`,
		"fallback": "glyphs:sort-alpha-down-duo",
	});
}

export default Component;
