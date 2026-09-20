import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nalzdz3gx.css';
import '../../css/n/nw_fw7zya.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nalzdz3gx"/><path class="nw_fw7zya"/>`,
		"fallback": "openmoji:rightwards-hand-light-skin-tone",
	});
}

export default Component;
