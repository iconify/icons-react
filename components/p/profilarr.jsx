import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6ec5ibda.css';
import '../../css/z/z82ckhzmf.css';
import '../../css/j/jf_8h71yx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6ec5ibda"/><path class="z82ckhzmf"/><path class="jf_8h71yx"/>`,
		"fallback": "selfhst:profilarr",
	});
}

export default Component;
