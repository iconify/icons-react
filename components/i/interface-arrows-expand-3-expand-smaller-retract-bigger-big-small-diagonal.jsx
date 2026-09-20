import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br0wady_l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br0wady_l"/>`,
		"fallback": "streamline:interface-arrows-expand-3-expand-smaller-retract-bigger-big-small-diagonal",
	});
}

export default Component;
