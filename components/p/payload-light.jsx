import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijm3kab7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijm3kab7f"/>`,
		"fallback": "material-icon-theme:payload-light",
	});
}

export default Component;
