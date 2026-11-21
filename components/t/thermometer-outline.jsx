import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvg43muth.css';
import '../../css/h/hkazuhb3h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvg43muth"/><circle class="hkazuhb3h"/>`,
		"fallback": "ion:thermometer-outline",
	});
}

export default Component;
