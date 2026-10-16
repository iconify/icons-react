import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn3kjzbic.css';
import '../../css/t/twtl22bnx.css';
import '../../css/l/l7kylvopx.css';
import '../../css/n/n--7ae4_v.css';
import '../../css/o/odt2m1bnh.css';
import '../../css/i/i94ktrahq.css';
import '../../css/y/ycmo7xb4s.css';
import '../../css/e/ev7mruyyc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn3kjzbic"/><path class="twtl22bnx"/><path class="l7kylvopx"/><path class="n--7ae4_v"/><path class="odt2m1bnh"/><path class="i94ktrahq"/><path class="ycmo7xb4s"/><path class="ev7mruyyc"/>`,
		"fallback": "energy-icons:irrigation-20",
	});
}

export default Component;
