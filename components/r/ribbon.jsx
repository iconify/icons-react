import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaxfskgkh.css';

const viewBox = {"width":420,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaxfskgkh"/>`,
		"fallback": "il:ribbon",
	});
}

export default Component;
