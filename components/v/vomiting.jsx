import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js6bkmb4f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="js6bkmb4f"/>`,
		"fallback": "healthicons:vomiting",
	});
}

export default Component;
