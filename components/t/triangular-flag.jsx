import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkygdid_m.css';
import '../../css/z/z2ukw-u9z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkygdid_m"/><path class="z2ukw-u9z"/>`,
		"fallback": "openmoji:triangular-flag",
	});
}

export default Component;
