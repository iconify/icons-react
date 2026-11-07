import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et59vtbnu.css';
import '../../css/t/tmd21lv3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et59vtbnu"/><path class="tmd21lv3k"/>`,
		"fallback": "solar:text-field-bold-duotone",
	});
}

export default Component;
