import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8ued2b6r.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8ued2b6r"/>`,
		"fallback": "gis:road-map",
	});
}

export default Component;
