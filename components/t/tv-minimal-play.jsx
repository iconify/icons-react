import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q2nu88bho.css';
import '../../css/g/gwzz95rfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q2nu88bho"/><path class="gwzz95rfc"/></g>`,
		"fallback": "vadivam:tv-minimal-play",
	});
}

export default Component;
