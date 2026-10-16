import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z53h8x6cn.css';
import '../../css/s/s4oh_vbgz.css';
import '../../css/o/owlaymb3a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z53h8x6cn"/><path class="s4oh_vbgz"/><path class="owlaymb3a"/>`,
		"fallback": "energy-icons:spring-balance-48",
	});
}

export default Component;
