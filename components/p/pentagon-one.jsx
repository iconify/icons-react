import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emsq_7iza.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emsq_7iza"/>`,
		"fallback": "icon-park-outline:pentagon-one",
	});
}

export default Component;
