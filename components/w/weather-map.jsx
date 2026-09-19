import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkov50bwr.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkov50bwr"/>`,
		"fallback": "gis:weather-map",
	});
}

export default Component;
