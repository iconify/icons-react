import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkophlb7r.css';
import '../../css/x/xiggllbmz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkophlb7r"/><path class="xiggllbmz"/>`,
		"fallback": "energy-icons:street-light-20-bold",
	});
}

export default Component;
