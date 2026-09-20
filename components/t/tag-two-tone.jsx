import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f5ssbf2_o.css';
import '../../css/e/e5futabtb.css';
import '../../css/s/s1f4hpnzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f5ssbf2_o"/><path class="e5futabtb"/><path class="s1f4hpnzw"/></g>`,
		"fallback": "keyline-icons:tag-two-tone",
	});
}

export default Component;
