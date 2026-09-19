import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-cy1ebpm.css';
import '../../css/m/miw977k3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-cy1ebpm"/><path class="miw977k3e"/>`,
		"fallback": "ion:ios-box",
	});
}

export default Component;
