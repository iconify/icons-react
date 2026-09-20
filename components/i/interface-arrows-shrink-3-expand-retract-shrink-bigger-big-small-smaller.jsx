import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leow5mbdd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leow5mbdd"/>`,
		"fallback": "streamline:interface-arrows-shrink-3-expand-retract-shrink-bigger-big-small-smaller",
	});
}

export default Component;
