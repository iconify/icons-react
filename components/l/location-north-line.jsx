import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfyj77ntw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfyj77ntw"/>`,
		"fallback": "f7:location-north-line",
	});
}

export default Component;
