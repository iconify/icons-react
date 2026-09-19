import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kzabpbcif.css';
import '../../css/m/mqi2acbsg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="kzabpbcif"/><path class="mqi2acbsg"/></g>`,
		"fallback": "cryptocurrency-color:steem",
	});
}

export default Component;
