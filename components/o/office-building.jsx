import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6n2v-bef.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b6n2v-bef"/>`,
		"fallback": "heroicons-solid:office-building",
	});
}

export default Component;
