import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/er7mpaceb.css';
import '../../css/y/y_1iqhbrl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="er7mpaceb"/><circle class="y_1iqhbrl"/></g>`,
		"fallback": "charm:map-pin",
	});
}

export default Component;
