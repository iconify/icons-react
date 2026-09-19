import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtsijlbvl.css';
import '../../css/x/x67r1rb3u.css';
import '../../css/k/kf_wzi21l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jtsijlbvl"/><path clip-rule="evenodd" class="x67r1rb3u"/><path class="kf_wzi21l"/>`,
		"fallback": "ion:social-linkedin-outline",
	});
}

export default Component;
