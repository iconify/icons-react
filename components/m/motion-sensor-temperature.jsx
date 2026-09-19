import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_2q19p9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_2q19p9f"/>`,
		"fallback": "cbi:motion-sensor-temperature",
	});
}

export default Component;
