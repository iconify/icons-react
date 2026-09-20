import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uakfjcbyb.css';
import '../../css/s/spxxfgbbj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uakfjcbyb"/><path class="spxxfgbbj"/>`,
		"fallback": "vaadin:safe",
	});
}

export default Component;
