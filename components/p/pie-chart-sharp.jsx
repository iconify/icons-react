import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sit0q75hg.css';
import '../../css/a/ajb1qznwb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sit0q75hg"/><path class="ajb1qznwb"/>`,
		"fallback": "ion:pie-chart-sharp",
	});
}

export default Component;
