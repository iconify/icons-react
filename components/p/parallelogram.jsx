import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6zi112qj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6zi112qj"/>`,
		"fallback": "icon-park:parallelogram",
	});
}

export default Component;
