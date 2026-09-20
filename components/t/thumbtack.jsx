import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poxcth_om.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poxcth_om"/>`,
		"fallback": "simple-icons:thumbtack",
	});
}

export default Component;
