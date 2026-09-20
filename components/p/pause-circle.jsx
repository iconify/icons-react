import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wph9epb7q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wph9epb7q"/>`,
		"fallback": "uiw:pause-circle",
	});
}

export default Component;
