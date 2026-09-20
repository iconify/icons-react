import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbwtn-biq.css';
import '../../css/e/e7ttr_boe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbwtn-biq"/><path class="e7ttr_boe"/>`,
		"fallback": "vaadin:tree-table",
	});
}

export default Component;
