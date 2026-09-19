import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-ckk9bui.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k-ckk9bui"/>`,
		"fallback": "heroicons-solid:rectangle-group",
	});
}

export default Component;
