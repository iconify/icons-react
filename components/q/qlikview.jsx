import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm2_ybbbo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm2_ybbbo"/>`,
		"fallback": "file-icons:qlikview",
	});
}

export default Component;
