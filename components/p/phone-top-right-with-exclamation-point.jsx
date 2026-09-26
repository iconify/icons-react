import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag3oe707j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag3oe707j"/>`,
		"fallback": "pinhead:phone-top-right-with-exclamation-point",
	});
}

export default Component;
