import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqqcd7bya.css';
import '../../css/g/ghnrm6ksq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqqcd7bya"/><path class="ghnrm6ksq"/>`,
		"fallback": "openmoji:trident-emblem",
	});
}

export default Component;
