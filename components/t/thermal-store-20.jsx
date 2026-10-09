import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha3x0fenn.css';
import '../../css/g/ge-9v90ve.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha3x0fenn"/><path class="ge-9v90ve"/>`,
		"fallback": "energy-icons:thermal-store-20",
	});
}

export default Component;
