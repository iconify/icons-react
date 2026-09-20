import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asd640ooi.css';

const viewBox = {"width":153,"height":152};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="asd640ooi"/>`,
		"fallback": "thesvg-color:tembo-light",
	});
}

export default Component;
