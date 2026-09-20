import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4tcjx.css';
import '../../css/y/ydovum.css';
import '../../css/u/uj17_n.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-70.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-4c0-hc.css';
import '../../css/d/d-i58k3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4tcjx ydovum"/><path class="uj17_n ydovum"/>`,
		"fallback": "line-md:tablet-twotone",
	});
}

export default Component;
