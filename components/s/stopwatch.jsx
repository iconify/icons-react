import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrrw0tgug.css';
import '../../css/k/kh_vbgbyi.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrrw0tgug"/><path class="kh_vbgbyi"/>`,
		"fallback": "fontisto:stopwatch",
	});
}

export default Component;
