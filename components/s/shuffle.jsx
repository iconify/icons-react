import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt2gydb6l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt2gydb6l"/>`,
		"fallback": "entypo:shuffle",
	});
}

export default Component;
