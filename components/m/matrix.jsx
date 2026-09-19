import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8vrhujpl.css';
import '../../css/p/pgrjimbvm.css';
import '../../css/h/hrtycpelz.css';
import '../../css/h/ho6a3e0mt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8vrhujpl"/><path class="pgrjimbvm"/><path class="hrtycpelz"/><path class="ho6a3e0mt"/>`,
		"fallback": "carbon:matrix",
	});
}

export default Component;
