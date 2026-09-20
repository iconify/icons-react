import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv9k1mbtp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv9k1mbtp"/>`,
		"fallback": "lsicon:top-outline",
	});
}

export default Component;
