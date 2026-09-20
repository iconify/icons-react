import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvkcm2jga.css';

const viewBox = {"width":200,"height":92.11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvkcm2jga"/>`,
		"fallback": "thesvg-color:ngrok-dark",
	});
}

export default Component;
