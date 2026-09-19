import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs0poacqc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs0poacqc"/>`,
		"fallback": "entypo:old-phone",
	});
}

export default Component;
