import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhh-lmb1b.css';
import '../../css/w/wioqj5bua.css';
import '../../css/r/ru5wvccub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhh-lmb1b"/><path class="wioqj5bua"/><path clip-rule="evenodd" class="ru5wvccub"/>`,
		"fallback": "solar:maximize-square-3-outline",
	});
}

export default Component;
