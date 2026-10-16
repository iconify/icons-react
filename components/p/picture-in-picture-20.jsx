import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co0vf9bvy.css';
import '../../css/c/cukx4cbqs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co0vf9bvy"/><path class="cukx4cbqs"/>`,
		"fallback": "energy-icons:picture-in-picture-20",
	});
}

export default Component;
