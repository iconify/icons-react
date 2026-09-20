import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srmks4o_f.css';
import '../../css/h/h6on4ibgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srmks4o_f"/><path class="h6on4ibgt"/>`,
		"fallback": "lineicons:train-1",
	});
}

export default Component;
