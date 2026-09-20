import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak_u2fnec.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ak_u2fnec"/>`,
		"fallback": "qlementine-icons:moon-16",
	});
}

export default Component;
