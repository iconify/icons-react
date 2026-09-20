import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzi7zfbtp.css';
import '../../css/f/fh60u4boo.css';
import '../../css/c/cnio1-a_z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzi7zfbtp"/><path class="fh60u4boo"/><path class="cnio1-a_z"/>`,
		"fallback": "octicon:megaphone-16",
	});
}

export default Component;
