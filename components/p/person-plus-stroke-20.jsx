import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkn0u6z1h.css';
import '../../css/z/zcm3eh2ia.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkn0u6z1h"/><path class="zcm3eh2ia"/>`,
		"fallback": "garden:person-plus-stroke-20",
	});
}

export default Component;
