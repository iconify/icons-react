import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgyv-v2ep.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dgyv-v2ep"/>`,
		"fallback": "sidekickicons:italic-slash-20-solid",
	});
}

export default Component;
