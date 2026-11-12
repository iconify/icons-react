import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de8vc1b0q.css';
import '../../css/p/p6w1hubtr.css';
import '../../css/q/qtrz8zcqb.css';
import '../../css/j/ju0jd-e1r.css';
import '../../css/n/nsqt2sw2y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de8vc1b0q"/><path class="p6w1hubtr"/><path class="qtrz8zcqb"/><path class="ju0jd-e1r"/><path class="nsqt2sw2y"/>`,
		"fallback": "selfhst:nps-enhanced-light",
	});
}

export default Component;
