import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9o3dobzw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9o3dobzw"/>`,
		"fallback": "f7:tropicalstorm",
	});
}

export default Component;
