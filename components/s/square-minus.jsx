import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kbzksu78q.css';
import '../../css/e/enhzqsbdl.css';
import '../../css/n/n04na1btn.css';
import '../../css/v/vxg4k9b0f.css';
import '../../css/o/o3g4qvlem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kbzksu78q wm-k"/><path class="enhzqsbdl wm-k"/><path class="n04na1btn wm-k"/><path class="vxg4k9b0f wm-shine"/><path class="o3g4qvlem wm-a"/></g>`,
		"fallback": "withicons-anime:square-minus",
	});
}

export default Component;
