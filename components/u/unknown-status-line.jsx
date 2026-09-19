import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwe8g8bcu.css';
import '../../css/f/fcrmxtbfx.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="clr-i-outline clr-i-outline-path-1 xwe8g8bcu"/><path class="clr-i-outline clr-i-outline-path-2 fcrmxtbfx"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:unknown-status-line",
	});
}

export default Component;
