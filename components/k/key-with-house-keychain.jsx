import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek7rwjbyj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek7rwjbyj"/>`,
		"fallback": "pinhead:key-with-house-keychain",
	});
}

export default Component;
