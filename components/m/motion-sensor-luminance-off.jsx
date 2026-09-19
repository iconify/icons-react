import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akvldvb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akvldvb4g"/>`,
		"fallback": "cbi:motion-sensor-luminance-off",
	});
}

export default Component;
