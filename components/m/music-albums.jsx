import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czmczs_ex.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czmczs_ex"/>`,
		"fallback": "f7:music-albums",
	});
}

export default Component;
