import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd29xjbus.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd29xjbus"/>`,
		"fallback": "dinkie-icons:otfeature-ordn-small-filled",
	});
}

export default Component;
