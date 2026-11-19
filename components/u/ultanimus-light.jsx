import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s77gngb9u.css';
import '../../css/n/n3-u1ki8e.css';

const viewBox = {"width":18,"height":20,"left":3,"top":2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s77gngb9u"/><circle class="n3-u1ki8e"/>`,
		"fallback": "thesvg-color:ultanimus-light",
	});
}

export default Component;
