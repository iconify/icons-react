import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uondj3csi.css';
import '../../css/i/iz9qeihpv.css';
import '../../css/b/bpqpvpasa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uondj3csi"/><path clip-rule="evenodd" class="iz9qeihpv"/><path class="bpqpvpasa"/></g>`,
		"fallback": "icon-park-outline:lark-one",
	});
}

export default Component;
