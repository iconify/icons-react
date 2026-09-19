import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0rcu6byt.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0rcu6byt"/>`,
		"fallback": "f7:thermometer-sun",
	});
}

export default Component;
