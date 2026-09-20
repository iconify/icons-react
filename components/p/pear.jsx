import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jejrh1gth.css';
import '../../css/v/vym5f4c_s.css';
import '../../css/o/optgq2b0x.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jejrh1gth"/><path class="vym5f4c_s"/><path class="optgq2b0x"/>`,
		"fallback": "openmoji:pear",
	});
}

export default Component;
