import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zcxs2c9jq.css';
import '../../css/x/x7lashajg.css';
import '../../css/s/sn_3tnnme.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zcxs2c9jq"/><path class="x7lashajg"/><path clip-rule="evenodd" class="sn_3tnnme"/></g>`,
		"fallback": "streamline-color:local-storage-folder-flat",
	});
}

export default Component;
