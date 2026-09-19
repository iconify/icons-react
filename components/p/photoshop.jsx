import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olr6uaclq.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olr6uaclq"/>`,
		"fallback": "whh:photoshop",
	});
}

export default Component;
