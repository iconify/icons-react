import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md1sf7lxz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md1sf7lxz"/>`,
		"fallback": "streamline:open-book",
	});
}

export default Component;
