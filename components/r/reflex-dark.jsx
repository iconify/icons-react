import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw3edznub.css';

const viewBox = {"width":56,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw3edznub"/>`,
		"fallback": "thesvg-color:reflex-dark",
	});
}

export default Component;
