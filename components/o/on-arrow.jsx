import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh87dwy8v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh87dwy8v"/>`,
		"fallback": "fluent-emoji-flat:on-arrow",
	});
}

export default Component;
