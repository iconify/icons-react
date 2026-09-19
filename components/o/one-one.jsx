import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etb614apb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etb614apb"/>`,
		"fallback": "icon-park:one-one",
	});
}

export default Component;
