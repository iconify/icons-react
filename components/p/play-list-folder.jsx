import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/k42wjac1z.css';
import '../../css/v/vd41o3-co.css';
import '../../css/w/w9-udcbpx.css';
import '../../css/o/owyisliko.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="k42wjac1z"/><path class="vd41o3-co"/><path class="w9-udcbpx"/><path class="owyisliko"/></g>`,
		"fallback": "streamline-plump-color:play-list-folder",
	});
}

export default Component;
