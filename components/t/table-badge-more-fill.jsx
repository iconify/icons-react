import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqgumy6mn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqgumy6mn"/>`,
		"fallback": "f7:table-badge-more-fill",
	});
}

export default Component;
