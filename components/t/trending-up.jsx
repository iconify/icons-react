import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4j931bew.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b4j931bew"/>`,
		"fallback": "heroicons-solid:trending-up",
	});
}

export default Component;
