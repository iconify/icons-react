import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvoqjmboh.css';
import '../../css/j/jdpi5byld.css';
import '../../css/m/mznjhlbhj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvoqjmboh"/><path class="jdpi5byld"/><path class="mznjhlbhj"/>`,
		"fallback": "carbon:study-skip",
	});
}

export default Component;
