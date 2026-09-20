import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv9vz6s_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv9vz6s_q"/>`,
		"fallback": "thesvg-color:libreoffice-draw",
	});
}

export default Component;
