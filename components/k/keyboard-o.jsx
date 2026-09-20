import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp87_jb1i.css';
import '../../css/p/p8ldtcc9g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp87_jb1i"/><path class="p8ldtcc9g"/>`,
		"fallback": "vaadin:keyboard-o",
	});
}

export default Component;
