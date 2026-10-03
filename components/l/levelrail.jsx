import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa9luhbdn.css';
import '../../css/c/csdbzz87e.css';
import '../../css/f/f33uh_tqe.css';
import '../../css/w/wx8x_ob0s.css';
import '../../css/m/mjomyabcq.css';
import '../../css/o/oejueobgq.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="oa9luhbdn"/><rect class="csdbzz87e"/><rect class="f33uh_tqe"/><rect class="wx8x_ob0s"/><rect class="mjomyabcq"/><rect class="oejueobgq"/>`,
		"fallback": "thesvg-color:levelrail",
	});
}

export default Component;
