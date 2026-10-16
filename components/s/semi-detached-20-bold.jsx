import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdcnnnb3n.css';
import '../../css/x/xxc3j4pon.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdcnnnb3n"/><path class="xxc3j4pon"/>`,
		"fallback": "energy-icons:semi-detached-20-bold",
	});
}

export default Component;
