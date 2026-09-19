import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nm63zg0wp.css';
import '../../css/y/yjo9i5b3u.css';
import '../../css/d/dgznyouyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nm63zg0wp"/><path class="yjo9i5b3u"/><path class="dgznyouyl"/></g>`,
		"fallback": "hugeicons:shopping-basket-add-02",
	});
}

export default Component;
