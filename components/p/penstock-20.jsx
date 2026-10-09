import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh3xhwb0f.css';
import '../../css/g/gfokxvboe.css';
import '../../css/m/m42n8zsrd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh3xhwb0f"/><path class="gfokxvboe"/><path class="m42n8zsrd"/>`,
		"fallback": "energy-icons:penstock-20",
	});
}

export default Component;
