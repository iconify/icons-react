import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecobcdb3u.css';
import '../../css/t/tgdfm4b2x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecobcdb3u"/><path class="tgdfm4b2x"/>`,
		"fallback": "icomoon-free:user-check",
	});
}

export default Component;
