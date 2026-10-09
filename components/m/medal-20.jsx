import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa8cast3m.css';
import '../../css/q/qxzfcfqis.css';
import '../../css/p/p10chkbow.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa8cast3m"/><path class="qxzfcfqis"/><path class="p10chkbow"/>`,
		"fallback": "energy-icons:medal-20",
	});
}

export default Component;
