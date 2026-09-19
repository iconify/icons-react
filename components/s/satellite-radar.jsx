import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lclbo1n2e.css';
import '../../css/h/helnm_mgv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lclbo1n2e"/><path class="helnm_mgv"/>`,
		"fallback": "carbon:satellite-radar",
	});
}

export default Component;
