import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ild9oxbtf.css';
import '../../css/e/ey4n-e_7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ild9oxbtf"/><path class="ey4n-e_7i"/></g>`,
		"fallback": "solar:logout-3-bold-duotone",
	});
}

export default Component;
