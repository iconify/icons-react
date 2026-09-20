import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9ms0wllv.css';
import '../../css/d/dd6fl6u9c.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z9ms0wllv"/><path class="dd6fl6u9c"/>`,
		"fallback": "lineicons:volume-low",
	});
}

export default Component;
