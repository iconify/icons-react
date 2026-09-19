import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znvomhwkh.css';

const viewBox = {"width":304,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znvomhwkh"/>`,
		"fallback": "ps:tumblr",
	});
}

export default Component;
