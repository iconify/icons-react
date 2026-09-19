import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv7zpptfp.css';
import '../../css/x/xnpc5acoh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv7zpptfp"/><path class="xnpc5acoh"/>`,
		"fallback": "catppuccin:nx",
	});
}

export default Component;
