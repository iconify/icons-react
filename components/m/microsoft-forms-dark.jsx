import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz85szbfs.css';
import '../../css/n/n0jbx_btg.css';
import '../../css/e/ew9dzee3t.css';
import '../../css/a/aip36mint.css';
import '../../css/m/mmux6pkuu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz85szbfs"/><path class="n0jbx_btg"/><path class="ew9dzee3t"/><path class="aip36mint"/><path class="mmux6pkuu"/>`,
		"fallback": "selfhst:microsoft-forms-dark",
	});
}

export default Component;
