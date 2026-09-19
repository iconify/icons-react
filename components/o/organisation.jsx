import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/az8-38qqs.css';
import '../../css/c/c91ozbctr.css';
import '../../css/b/bh_qopb5p.css';
import '../../css/u/us-x21b2b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="az8-38qqs"/><rect class="c91ozbctr"/><rect class="bh_qopb5p"/><path class="us-x21b2b"/></g>`,
		"fallback": "charm:organisation",
	});
}

export default Component;
