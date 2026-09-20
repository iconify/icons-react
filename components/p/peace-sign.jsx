import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/milj044hn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="milj044hn"/>`,
		"fallback": "pinhead:peace-sign",
	});
}

export default Component;
