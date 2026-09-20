import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_64j2bck.css';
import '../../css/a/ao9inwbnl.css';
import '../../css/z/zduyjj29s.css';
import '../../css/m/mtc92wbsn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_64j2bck"/><path class="ao9inwbnl"/><path class="zduyjj29s"/><path class="mtc92wbsn"/>`,
		"fallback": "selfhst:peertube",
	});
}

export default Component;
