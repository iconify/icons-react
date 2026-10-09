import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9rzdmy5w.css';
import '../../css/z/zdxcevbat.css';
import '../../css/a/ayyx0bb8c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9rzdmy5w"/><path class="zdxcevbat"/><path class="ayyx0bb8c"/>`,
		"fallback": "energy-icons:lock-keyhole-20-bold",
	});
}

export default Component;
