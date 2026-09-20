import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqd-mv85n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqd-mv85n"/>`,
		"fallback": "simple-icons:playerdotme",
	});
}

export default Component;
