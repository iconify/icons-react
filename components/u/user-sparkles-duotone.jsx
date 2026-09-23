import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tohfid2mj.css';
import '../../css/o/osq6ts8yf.css';
import '../../css/n/njsvdyp0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tohfid2mj"/><path class="osq6ts8yf"/><path class="njsvdyp0i"/></g>`,
		"fallback": "keyline-icons:user-sparkles-duotone",
	});
}

export default Component;
