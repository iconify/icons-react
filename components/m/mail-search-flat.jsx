import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vc_01lb6n.css';
import '../../css/w/w81nml9tu.css';
import '../../css/a/a-4tdvfpo.css';
import '../../css/q/qsvafo7sf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vc_01lb6n"/><path class="w81nml9tu"/><path class="a-4tdvfpo"/><path clip-rule="evenodd" class="qsvafo7sf"/></g>`,
		"fallback": "streamline-plump-color:mail-search-flat",
	});
}

export default Component;
