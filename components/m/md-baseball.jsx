import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykl75acdx.css';
import '../../css/u/uvdwn1_nw.css';
import '../../css/b/bg9eedant.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykl75acdx"/><path class="uvdwn1_nw"/><path class="bg9eedant"/>`,
		"fallback": "ion:md-baseball",
	});
}

export default Component;
