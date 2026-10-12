import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d213agn5f.css';
import '../../css/g/gedrdccde.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d213agn5f"/><path class="gedrdccde"/>`,
		"fallback": "garden:phone-in-stroke-20",
	});
}

export default Component;
