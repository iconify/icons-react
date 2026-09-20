import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/biqfn3cux.css';
import '../../css/u/ux68i6bzm.css';
import '../../css/j/jgnqm3byw.css';
import '../../css/o/ox_shobxj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="biqfn3cux"/><path class="ux68i6bzm"/><path class="jgnqm3byw"/><path class="ox_shobxj"/></g>`,
		"fallback": "streamline-plump-color:potted-flower-flat",
	});
}

export default Component;
