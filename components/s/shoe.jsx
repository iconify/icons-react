import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1tooob1x.css';

const viewBox = {"width":520,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1tooob1x"/>`,
		"fallback": "ps:shoe",
	});
}

export default Component;
