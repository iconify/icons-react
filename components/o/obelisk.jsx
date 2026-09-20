import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aumdvgb6d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aumdvgb6d"/>`,
		"fallback": "temaki:obelisk",
	});
}

export default Component;
