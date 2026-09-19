import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmmcidcze.css';
import '../../css/t/tba5rlbwf.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmmcidcze"/><path class="tba5rlbwf"/>`,
		"fallback": "foundation:social-evernote",
	});
}

export default Component;
