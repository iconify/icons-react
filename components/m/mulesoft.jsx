import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkom-ab6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkom-ab6f"/>`,
		"fallback": "simple-icons:mulesoft",
	});
}

export default Component;
