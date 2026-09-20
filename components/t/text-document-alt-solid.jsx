import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phivkab6v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="phivkab6v"/>`,
		"fallback": "teenyicons:text-document-alt-solid",
	});
}

export default Component;
