import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-py-4wxm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m-py-4wxm"/>`,
		"fallback": "streamline-flex:small-caps-solid",
	});
}

export default Component;
