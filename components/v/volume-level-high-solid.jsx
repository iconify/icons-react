import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn1jyfb5k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xn1jyfb5k"/>`,
		"fallback": "streamline-plump:volume-level-high-solid",
	});
}

export default Component;
