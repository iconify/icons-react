import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hetltv1hn.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hetltv1hn"/>`,
		"fallback": "map:snow-shoeing",
	});
}

export default Component;
