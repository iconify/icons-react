import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/durrixbcc.css';
import '../../css/r/re-9pnl2o.css';
import '../../css/b/b8b9eabcj.css';
import '../../css/j/j4jbqabqa.css';
import '../../css/a/aki-accfz.css';
import '../../css/x/xjyriybhf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="durrixbcc"/><path class="re-9pnl2o"/><path class="b8b9eabcj"/><path class="j4jbqabqa"/><path class="aki-accfz"/><path class="xjyriybhf"/>`,
		"fallback": "selfhst:kitsu-dark",
	});
}

export default Component;
