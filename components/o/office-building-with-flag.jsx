import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsp1cjdax.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsp1cjdax"/>`,
		"fallback": "pinhead:office-building-with-flag",
	});
}

export default Component;
