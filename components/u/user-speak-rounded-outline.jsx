import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow3ooltuw.css';
import '../../css/h/hsy303b0e.css';
import '../../css/v/vfkp8cb2v.css';
import '../../css/c/c8mwtbcpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow3ooltuw"/><path clip-rule="evenodd" class="hsy303b0e"/><path clip-rule="evenodd" class="vfkp8cb2v"/><path class="c8mwtbcpp"/>`,
		"fallback": "solar:user-speak-rounded-outline",
	});
}

export default Component;
