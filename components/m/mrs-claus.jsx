import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adhr84b5i.css';
import '../../css/h/htmu1qfhg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adhr84b5i"/><path class="htmu1qfhg"/>`,
		"fallback": "fluent-emoji-high-contrast:mrs-claus",
	});
}

export default Component;
