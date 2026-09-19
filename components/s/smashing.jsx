import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg-90vbho.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg-90vbho"/>`,
		"fallback": "entypo-social:smashing",
	});
}

export default Component;
