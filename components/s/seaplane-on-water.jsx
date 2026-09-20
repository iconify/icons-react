import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9sagjzat.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9sagjzat"/>`,
		"fallback": "pinhead:seaplane-on-water",
	});
}

export default Component;
