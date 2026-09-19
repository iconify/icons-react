import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzcxy2o3x.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzcxy2o3x"/>`,
		"fallback": "gis:measure-area",
	});
}

export default Component;
