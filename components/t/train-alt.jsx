import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihh-fxb0c.css';
import '../../css/x/xt343bbpc.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihh-fxb0c"/><path class="xt343bbpc"/>`,
		"fallback": "lineicons:train-alt",
	});
}

export default Component;
