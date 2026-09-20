import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-fg1db2d.css';
import '../../css/f/frl31gg3f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-fg1db2d"/><path class="frl31gg3f"/>`,
		"fallback": "vaadin:sign-in",
	});
}

export default Component;
