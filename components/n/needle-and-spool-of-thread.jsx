import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-agpl5uh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-agpl5uh"/>`,
		"fallback": "pinhead:needle-and-spool-of-thread",
	});
}

export default Component;
