import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esoy3w7su.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esoy3w7su"/>`,
		"fallback": "cib:qgis",
	});
}

export default Component;
