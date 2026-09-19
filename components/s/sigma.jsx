import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8fpg0bpe.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8fpg0bpe"/>`,
		"fallback": "fa-solid:sigma",
	});
}

export default Component;
