import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i24gx0b8d.css';
import '../../css/r/rnqc0wxrk.css';
import '../../css/j/jmpiblj0v.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i24gx0b8d"/><path class="rnqc0wxrk"/><path class="jmpiblj0v"/>`,
		"fallback": "openmoji:solar-cell",
	});
}

export default Component;
