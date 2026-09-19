import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq7mt7e7b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq7mt7e7b"/>`,
		"fallback": "fluent-emoji-flat:paw-prints",
	});
}

export default Component;
