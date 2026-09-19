import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow83bgbqz.css';
import '../../css/o/oexci5_ie.css';
import '../../css/w/wahgcobfj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow83bgbqz"/><path class="oexci5_ie"/><path class="wahgcobfj"/>`,
		"fallback": "ion:md-help-circle-outline",
	});
}

export default Component;
