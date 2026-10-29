import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wn8xc24mn.css';
import '../../css/c/cfnb1cxzk.css';
import '../../css/u/u2h1qi64o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wn8xc24mn"/><path class="cfnb1cxzk"/><path class="u2h1qi64o"/></g>`,
		"fallback": "vadivam:repeat-2",
	});
}

export default Component;
