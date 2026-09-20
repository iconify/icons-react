import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx6hg60hp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx6hg60hp"/>`,
		"fallback": "temaki:scuba-diving",
	});
}

export default Component;
