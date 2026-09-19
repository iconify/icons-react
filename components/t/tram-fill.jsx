import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0-ehhb4y.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0-ehhb4y"/>`,
		"fallback": "f7:tram-fill",
	});
}

export default Component;
