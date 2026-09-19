import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9f-_9bvl.css';
import '../../css/x/x0ujedc_e.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9f-_9bvl"/><path class="x0ujedc_e"/>`,
		"fallback": "fontisto:random",
	});
}

export default Component;
