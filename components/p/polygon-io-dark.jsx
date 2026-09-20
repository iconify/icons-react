import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dih82-bfe.css';

const viewBox = {"width":290,"height":79};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dih82-bfe"/>`,
		"fallback": "thesvg-color:polygon-io-dark",
	});
}

export default Component;
