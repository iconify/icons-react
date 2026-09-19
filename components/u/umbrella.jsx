import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt97p4afp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt97p4afp"/>`,
		"fallback": "griddy-icons:umbrella",
	});
}

export default Component;
