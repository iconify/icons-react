import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km8wd_zes.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km8wd_zes"/>`,
		"fallback": "file-icons:sbt",
	});
}

export default Component;
