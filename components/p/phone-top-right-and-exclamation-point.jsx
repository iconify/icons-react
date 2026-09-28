import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oatpdtb7z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oatpdtb7z"/>`,
		"fallback": "pinhead:phone-top-right-and-exclamation-point",
	});
}

export default Component;
