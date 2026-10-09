import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fulicxqoo.css';
import '../../css/e/e8evysbwy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fulicxqoo"/><path class="e8evysbwy"/>`,
		"fallback": "energy-icons:sunset-20-bold",
	});
}

export default Component;
