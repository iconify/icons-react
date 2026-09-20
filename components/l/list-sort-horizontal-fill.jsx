import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au88ctbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au88ctbnv"/>`,
		"fallback": "keyline-icons:list-sort-horizontal-fill",
	});
}

export default Component;
