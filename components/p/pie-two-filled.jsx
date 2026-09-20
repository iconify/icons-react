import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7i2tnc_e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d7i2tnc_e"/>`,
		"fallback": "lsicon:pie-two-filled",
	});
}

export default Component;
