import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd5ux5bbr.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd5ux5bbr"/>`,
		"fallback": "dinkie-icons:keycap-return-small-filled",
	});
}

export default Component;
