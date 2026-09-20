import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck8bl2blq.css';
import '../../css/o/oiuivp-xw.css';
import '../../css/b/brgi00b6i.css';
import '../../css/p/p3d0wwbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck8bl2blq"/><path class="oiuivp-xw"/><path class="brgi00b6i"/><path class="p3d0wwbfy"/>`,
		"fallback": "token:und",
	});
}

export default Component;
