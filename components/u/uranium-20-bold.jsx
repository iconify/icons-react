import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv5gi5b9f.css';
import '../../css/l/l624pqxrk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv5gi5b9f"/><path class="l624pqxrk"/>`,
		"fallback": "energy-icons:uranium-20-bold",
	});
}

export default Component;
