import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h4pc6jngq.css';
import '../../css/w/wkm6c6j9i.css';
import '../../css/a/a5k_nab9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h4pc6jngq"/><path class="wkm6c6j9i"/><path class="a5k_nab9u"/></g>`,
		"fallback": "hugeicons:target-02",
	});
}

export default Component;
