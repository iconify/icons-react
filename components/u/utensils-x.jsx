import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnp4mc_bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnp4mc_bl"/>`,
		"fallback": "noviair-light:utensils-x",
	});
}

export default Component;
