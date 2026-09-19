import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_-c96hat.css';
import '../../css/d/d-y09zibp.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_-c96hat"/><path class="d-y09zibp"/>`,
		"fallback": "gis:map-send",
	});
}

export default Component;
