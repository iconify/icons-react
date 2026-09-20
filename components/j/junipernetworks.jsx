import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi5iun1qq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi5iun1qq"/>`,
		"fallback": "simple-icons:junipernetworks",
	});
}

export default Component;
