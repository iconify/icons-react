import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajnm6ob_j.css';
import '../../css/c/cscweibfi.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajnm6ob_j"/><path class="cscweibfi"/>`,
		"fallback": "gis:map-control",
	});
}

export default Component;
