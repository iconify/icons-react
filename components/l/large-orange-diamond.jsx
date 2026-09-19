import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an3el_c8v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an3el_c8v"/>`,
		"fallback": "fluent-emoji-flat:large-orange-diamond",
	});
}

export default Component;
