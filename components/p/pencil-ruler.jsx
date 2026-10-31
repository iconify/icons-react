import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/k3rplwb3c.css';
import '../../css/r/rw4tztb5c.css';
import '../../css/g/gbm7u0p8v.css';
import '../../css/i/i36_dacbt.css';
import '../../css/f/ffoonvqme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="k3rplwb3c wm-shadow"/><path class="rw4tztb5c wm-shadow"/><path class="gbm7u0p8v"/><path class="i36_dacbt"/><path class="ffoonvqme"/></g>`,
		"fallback": "withicons-brutal:pencil-ruler",
	});
}

export default Component;
