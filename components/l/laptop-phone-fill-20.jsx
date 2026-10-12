import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svybeubux.css';
import '../../css/t/t6dqwebft.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svybeubux"/><path class="t6dqwebft"/>`,
		"fallback": "garden:laptop-phone-fill-20",
	});
}

export default Component;
