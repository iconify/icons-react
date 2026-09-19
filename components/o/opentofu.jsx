import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5yy7fx-i.css';
import '../../css/p/puf8leb7o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5yy7fx-i"/><path class="puf8leb7o"/>`,
		"fallback": "catppuccin:opentofu",
	});
}

export default Component;
