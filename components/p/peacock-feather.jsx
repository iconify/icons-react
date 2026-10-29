import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mjzvuibua.css';
import '../../css/b/b5nir9bma.css';
import '../../css/o/oc02p8b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mjzvuibua"/><path class="b5nir9bma wm-a"/><path class="oc02p8b1x wm-a"/></g>`,
		"fallback": "withicons:peacock-feather",
	});
}

export default Component;
