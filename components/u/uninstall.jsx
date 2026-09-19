import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w06-b1bij.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w06-b1bij"/>`,
		"fallback": "entypo:uninstall",
	});
}

export default Component;
