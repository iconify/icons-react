import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnq5ckf1o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnq5ckf1o"/>`,
		"fallback": "pinhead:person-dropping-trash-into-wheelie-bin",
	});
}

export default Component;
