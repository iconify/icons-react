import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw8bn4bef.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw8bn4bef"/>`,
		"fallback": "cib:oracle",
	});
}

export default Component;
