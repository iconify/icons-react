import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4w4s00tn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4w4s00tn"/>`,
		"fallback": "f7:person-crop-circle",
	});
}

export default Component;
