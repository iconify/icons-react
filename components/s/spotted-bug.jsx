import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey2vr05ab.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey2vr05ab"/>`,
		"fallback": "game-icons:spotted-bug",
	});
}

export default Component;
