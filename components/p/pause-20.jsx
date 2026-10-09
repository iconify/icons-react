import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-02z6b-h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-02z6b-h"/>`,
		"fallback": "energy-icons:pause-20",
	});
}

export default Component;
