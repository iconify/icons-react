import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr1ubj--e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qr1ubj--e"/>`,
		"fallback": "pajamas:issue-type-key-result",
	});
}

export default Component;
