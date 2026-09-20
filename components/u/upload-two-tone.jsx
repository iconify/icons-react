import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w81tqgmta.css';
import '../../css/b/budvl5y-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w81tqgmta"/><path class="budvl5y-x"/></g>`,
		"fallback": "keyline-icons:upload-two-tone",
	});
}

export default Component;
