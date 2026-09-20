import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw93vibwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw93vibwn"/>`,
		"fallback": "mdi:screw-machine-flat-top",
	});
}

export default Component;
