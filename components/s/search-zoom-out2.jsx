import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xojf1ebkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xojf1ebkq"/>`,
		"fallback": "reicon:search-zoom-out2",
	});
}

export default Component;
