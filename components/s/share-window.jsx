import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny2u-nb0y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny2u-nb0y"/>`,
		"fallback": "codicon:share-window",
	});
}

export default Component;
