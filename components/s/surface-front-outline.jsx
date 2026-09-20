import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkafj-b4j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkafj-b4j"/>`,
		"fallback": "lsicon:surface-front-outline",
	});
}

export default Component;
