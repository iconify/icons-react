import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjn9f7o-d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjn9f7o-d"/>`,
		"fallback": "octicon:reply-16",
	});
}

export default Component;
