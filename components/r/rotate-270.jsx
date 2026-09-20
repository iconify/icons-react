import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/k/k88ffy.css';
import '../../css/g/gs347e.css';
import '../../css/s/so-from-34.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c k88ffy"/><path class="a0m25c gs347e"/>`,
		"fallback": "line-md:rotate-270",
	});
}

export default Component;
