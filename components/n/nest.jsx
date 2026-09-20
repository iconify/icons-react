import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3qgmzeta.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3qgmzeta"/>`,
		"fallback": "material-icon-theme:nest",
	});
}

export default Component;
