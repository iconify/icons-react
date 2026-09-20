import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fewaveakl.css';
import '../../css/k/ky4905xsu.css';
import '../../css/z/znvvmubwx.css';
import '../../css/m/m2te1-oby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fewaveakl"/><path class="ky4905xsu"/><path class="znvvmubwx"/><path class="m2te1-oby"/>`,
		"fallback": "token:rwn",
	});
}

export default Component;
