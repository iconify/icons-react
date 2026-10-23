import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/imij7qb8m.css';
import '../../css/j/jlylghjod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="imij7qb8m"/><path class="jlylghjod"/></g>`,
		"fallback": "vadivam:wallpaper",
	});
}

export default Component;
