import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sl_3r4agh.css';
import '../../css/r/r2juzqsgu.css';
import '../../css/h/ha3xd_bqt.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><rect class="sl_3r4agh"/><circle class="r2juzqsgu"/><path class="ha3xd_bqt"/></g>`,
		"fallback": "thesvg-color:plainsignal",
	});
}

export default Component;
