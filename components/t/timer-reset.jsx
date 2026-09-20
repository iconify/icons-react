import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/smxfznbqg.css';
import '../../css/h/hh02tz73t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="smxfznbqg"/><path class="hh02tz73t"/></g>`,
		"fallback": "lucide:timer-reset",
	});
}

export default Component;
