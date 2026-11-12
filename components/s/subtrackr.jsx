import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_-dcbbxg.css';
import '../../css/b/b9nh0sb1l.css';
import '../../css/l/lv_7odbrh.css';
import '../../css/i/ivu5h9bdp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_-dcbbxg"/><path class="b9nh0sb1l"/><path class="lv_7odbrh"/><path class="ivu5h9bdp"/>`,
		"fallback": "selfhst:subtrackr",
	});
}

export default Component;
