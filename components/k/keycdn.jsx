import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aned08bes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aned08bes"/>`,
		"fallback": "simple-icons:keycdn",
	});
}

export default Component;
