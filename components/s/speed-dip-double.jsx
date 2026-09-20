import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kywr7xg6l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kywr7xg6l"/>`,
		"fallback": "temaki:speed-dip-double",
	});
}

export default Component;
