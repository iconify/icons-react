import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrpjjwbqu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrpjjwbqu"/>`,
		"fallback": "f7:speaker-zzz-fill-rtl",
	});
}

export default Component;
