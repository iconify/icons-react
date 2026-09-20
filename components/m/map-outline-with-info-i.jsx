import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdxfm_-fk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdxfm_-fk"/>`,
		"fallback": "pinhead:map-outline-with-info-i",
	});
}

export default Component;
