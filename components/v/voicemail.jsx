import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz9y9syrb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz9y9syrb"/>`,
		"fallback": "fa7-solid:voicemail",
	});
}

export default Component;
