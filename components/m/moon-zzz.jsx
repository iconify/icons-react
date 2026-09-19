import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db7jd3bph.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db7jd3bph"/>`,
		"fallback": "f7:moon-zzz",
	});
}

export default Component;
