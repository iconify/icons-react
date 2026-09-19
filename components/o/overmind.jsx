import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzgf6_ocr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzgf6_ocr"/>`,
		"fallback": "game-icons:overmind",
	});
}

export default Component;
