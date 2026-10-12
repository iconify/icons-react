import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrff5xbwq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrff5xbwq"/>`,
		"fallback": "garden:share-fill-20",
	});
}

export default Component;
