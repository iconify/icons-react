import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/mmnjdfbni.css';
import '../../css/f/f2r7aqcds.css';
import '../../css/t/tt4z5sb8s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="mmnjdfbni"/><path class="f2r7aqcds"/><circle class="tt4z5sb8s"/></g>`,
		"fallback": "icon-park:shoulder-bag",
	});
}

export default Component;
