import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1y0igb8r.css';
import '../../css/j/j48tzybig.css';
import '../../css/t/tz5dmibxq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1y0igb8r"/><path class="j48tzybig"/><path class="tz5dmibxq"/>`,
		"fallback": "ant-design:medicine-box-twotone",
	});
}

export default Component;
