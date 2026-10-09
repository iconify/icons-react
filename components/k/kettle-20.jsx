import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_x1_pbed.css';
import '../../css/s/sf-hyccxk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_x1_pbed"/><path class="sf-hyccxk"/>`,
		"fallback": "energy-icons:kettle-20",
	});
}

export default Component;
