import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewl61acth.css';
import '../../css/r/r58_0ub5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewl61acth"/><path class="r58_0ub5s"/>`,
		"fallback": "eos-icons:package-upgrade-outlined",
	});
}

export default Component;
