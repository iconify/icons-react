import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2aclzb8i.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2aclzb8i"/>`,
		"fallback": "gis:mvt",
	});
}

export default Component;
