import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd1lu708s.css';
import '../../css/g/gmbi57b8u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd1lu708s"/><path class="gmbi57b8u"/>`,
		"fallback": "devicon:stackblitz-wordmark",
	});
}

export default Component;
