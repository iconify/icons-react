import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n--7ht5np.css';
import '../../css/v/vjwgz3bfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n--7ht5np"/><path class="vjwgz3bfz"/></g>`,
		"fallback": "covid:virus-lab-research-test-tube",
	});
}

export default Component;
