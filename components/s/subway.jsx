import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqroeob7g.css';
import '../../css/i/il713jb8x.css';

const viewBox = {"width":240,"height":47.9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqroeob7g"/><path class="il713jb8x"/>`,
		"fallback": "thesvg-color:subway",
	});
}

export default Component;
