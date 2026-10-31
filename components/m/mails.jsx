import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cwf5s3o1h.css';
import '../../css/e/e_86leb7d.css';
import '../../css/d/d-qchbxyw.css';
import '../../css/x/x1va1ccum.css';
import '../../css/x/x33z69b1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cwf5s3o1h wm-shadow"/><path class="e_86leb7d wm-shadow"/><path class="d-qchbxyw"/><path class="x1va1ccum"/><path class="x33z69b1b"/></g>`,
		"fallback": "withicons-brutal:mails",
	});
}

export default Component;
