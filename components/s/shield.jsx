import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okneeiblk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okneeiblk"/>`,
		"fallback": "entypo:shield",
	});
}

export default Component;
