import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8lu4nblm.css';
import '../../css/c/c21u_2--p.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8lu4nblm"/><path class="c21u_2--p"/>`,
		"fallback": "garden:volume-unmuted-fill-12",
	});
}

export default Component;
