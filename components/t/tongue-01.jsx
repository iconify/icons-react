import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/k/kf19dkbeq.css';
import '../../css/e/e-il9hbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="shu3xdl9q"/><path class="kf19dkbeq"/><path class="e-il9hbxo"/></g>`,
		"fallback": "hugeicons:tongue-01",
	});
}

export default Component;
