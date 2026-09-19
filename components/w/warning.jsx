import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iio3flbyw.css';
import '../../css/u/u3637ccul.css';
import '../../css/r/rc8bmi5tc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iio3flbyw"/><circle class="u3637ccul"/><path class="rc8bmi5tc"/>`,
		"fallback": "circum:warning",
	});
}

export default Component;
