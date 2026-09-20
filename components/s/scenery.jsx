import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-jgm53ez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-jgm53ez"/>`,
		"fallback": "uil:scenery",
	});
}

export default Component;
