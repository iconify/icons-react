import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc3rqc7_z.css';
import '../../css/a/a1_algbwn.css';
import '../../css/o/ogwim4gsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc3rqc7_z"/><path class="a1_algbwn"/><path class="ogwim4gsr"/>`,
		"fallback": "solar:map-bold",
	});
}

export default Component;
