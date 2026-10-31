import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/g5tmdofwo.css';
import '../../css/c/cqd7zk_db.css';
import '../../css/b/byumf6bwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="g5tmdofwo wm-shadow"/><path class="cqd7zk_db wm-shadow"/><path class="byumf6bwa"/></g>`,
		"fallback": "withicons-brutal:link",
	});
}

export default Component;
