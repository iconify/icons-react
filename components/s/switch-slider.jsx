import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztm9i2xkd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztm9i2xkd"/>`,
		"fallback": "ix:switch-slider",
	});
}

export default Component;
