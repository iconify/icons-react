import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft9ws6bod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft9ws6bod"/>`,
		"fallback": "material-icon-theme:liquid",
	});
}

export default Component;
