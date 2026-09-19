import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpqb_3bde.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpqb_3bde"/>`,
		"fallback": "icon-park:spanner",
	});
}

export default Component;
