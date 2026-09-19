import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9ywuf_1t.css';

const viewBox = {"width":352,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9ywuf_1t"/>`,
		"fallback": "ps:label-hogwarts",
	});
}

export default Component;
