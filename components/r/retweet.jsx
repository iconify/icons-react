import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvcijmbrg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvcijmbrg"/>`,
		"fallback": "vaadin:retweet",
	});
}

export default Component;
