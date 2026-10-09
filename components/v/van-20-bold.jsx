import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-4x9ob7y.css';
import '../../css/t/t47nc4b6q.css';
import '../../css/a/amdspubws.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-4x9ob7y"/><path class="t47nc4b6q"/><path class="amdspubws"/>`,
		"fallback": "energy-icons:van-20-bold",
	});
}

export default Component;
