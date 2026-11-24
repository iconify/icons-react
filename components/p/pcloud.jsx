import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5n0tdbry.css';
import '../../css/v/vfy3xytew.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5n0tdbry"/><path class="vfy3xytew"/>`,
		"fallback": "selfhst:pcloud",
	});
}

export default Component;
