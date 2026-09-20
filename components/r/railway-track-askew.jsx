import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d254ld3ia.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d254ld3ia"/>`,
		"fallback": "pinhead:railway-track-askew",
	});
}

export default Component;
