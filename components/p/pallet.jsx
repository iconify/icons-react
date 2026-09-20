import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v82j94bfo.css';
import '../../css/d/dgp4q7bgb.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v82j94bfo"/><path class="dgp4q7bgb"/>`,
		"fallback": "lineicons:pallet",
	});
}

export default Component;
