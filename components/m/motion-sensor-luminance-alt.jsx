import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqa-mecdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqa-mecdb"/>`,
		"fallback": "cbi:motion-sensor-luminance-alt",
	});
}

export default Component;
