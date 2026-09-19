import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4n9_hbzl.css';
import '../../css/v/v1j9wac_l.css';
import '../../css/v/vbzy9bb5g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4n9_hbzl"/><path class="v1j9wac_l"/><path class="vbzy9bb5g"/>`,
		"fallback": "carbon:status-acknowledge",
	});
}

export default Component;
