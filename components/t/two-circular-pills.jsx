import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v21e8jbhl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v21e8jbhl"/>`,
		"fallback": "pinhead:two-circular-pills",
	});
}

export default Component;
