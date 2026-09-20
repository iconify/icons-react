import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zlv1-5b1r.css';
import '../../css/o/oux0zvbfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zlv1-5b1r"/><rect class="oux0zvbfv"/></g>`,
		"fallback": "lets-icons:on-light",
	});
}

export default Component;
