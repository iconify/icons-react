import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owfef_bia.css';
import '../../css/e/e8e1iqbrn.css';
import '../../css/m/m7c60mbxm.css';
import '../../css/b/bz-wdcbdw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owfef_bia"/><path class="e8e1iqbrn"/><path class="m7c60mbxm"/><path class="bz-wdcbdw"/>`,
		"fallback": "energy-icons:transistor-48-bold",
	});
}

export default Component;
