import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/extss2joy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="extss2joy"/>`,
		"fallback": "pinhead:tornado-beside-shelter",
	});
}

export default Component;
