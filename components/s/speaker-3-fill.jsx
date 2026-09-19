import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iawiiv2tu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iawiiv2tu"/>`,
		"fallback": "f7:speaker-3-fill",
	});
}

export default Component;
