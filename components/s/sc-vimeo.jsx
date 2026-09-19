import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-157z73m.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-157z73m"/>`,
		"fallback": "ei:sc-vimeo",
	});
}

export default Component;
