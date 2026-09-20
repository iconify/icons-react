import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8z9q-b8u.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8z9q-b8u"/>`,
		"fallback": "picon:oillamp",
	});
}

export default Component;
