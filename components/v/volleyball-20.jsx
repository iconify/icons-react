import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/g/gvz_-7xqa.css';
import '../../css/w/w5gcokbqt.css';
import '../../css/d/dc8kggb1z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="gvz_-7xqa"/><path class="w5gcokbqt"/><path class="dc8kggb1z"/>`,
		"fallback": "energy-icons:volleyball-20",
	});
}

export default Component;
