import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1uodcbur.css';
import '../../css/j/jfe48oblp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a1uodcbur"/><path class="jfe48oblp"/></g>`,
		"fallback": "streamline-flex-color:treasure-chest",
	});
}

export default Component;
