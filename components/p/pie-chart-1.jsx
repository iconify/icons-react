import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_3k-myyj.css';
import '../../css/i/i1nctz7rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_3k-myyj"/><path class="i1nctz7rt"/>`,
		"fallback": "fontisto:pie-chart-1",
	});
}

export default Component;
