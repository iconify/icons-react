import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d97ksobub.css';
import '../../css/z/zepzk2bkr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d97ksobub"/><path class="zepzk2bkr"/>`,
		"fallback": "energy-icons:sunset-20",
	});
}

export default Component;
