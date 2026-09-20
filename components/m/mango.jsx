import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o57ox6b2a.css';
import '../../css/e/e-n9g8b2k.css';
import '../../css/o/owwmq-3oe.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/s3_clybbp.css';
import '../../css/i/idqvkhmgc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o57ox6b2a"/><path class="e-n9g8b2k"/><path class="owwmq-3oe"/><g class="jn8qy4bru"><path class="s3_clybbp"/><path class="idqvkhmgc"/></g>`,
		"fallback": "openmoji:mango",
	});
}

export default Component;
