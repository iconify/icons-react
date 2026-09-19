import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcnawdb5g.css';
import '../../css/t/tkku46-oc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs/><path class="fcnawdb5g"/><path class="tkku46-oc"/>`,
		"fallback": "carbon:region-analysis-area",
	});
}

export default Component;
