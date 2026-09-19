import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt5xb2bco.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt5xb2bco"/>`,
		"fallback": "f7:speaker-slash-rtl",
	});
}

export default Component;
