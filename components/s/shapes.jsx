import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mlofo-y7y.css';
import '../../css/a/aukjmk-qq.css';
import '../../css/n/nq38fhacn.css';
import '../../css/c/ckpths51c.css';
import '../../css/o/omglayz4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="mlofo-y7y wm-shadow"/><path class="aukjmk-qq wm-shadow"/><path class="nq38fhacn"/><path class="ckpths51c"/><path class="omglayz4e"/></g>`,
		"fallback": "withicons-brutal:shapes",
	});
}

export default Component;
