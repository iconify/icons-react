import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn_mz6b4i.css';
import '../../css/r/rf5rhacdh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn_mz6b4i"/><path class="rf5rhacdh"/>`,
		"fallback": "ion:ios-pie-outline",
	});
}

export default Component;
