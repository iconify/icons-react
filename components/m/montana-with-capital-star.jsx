import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh2ov0byk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh2ov0byk"/>`,
		"fallback": "pinhead:montana-with-capital-star",
	});
}

export default Component;
