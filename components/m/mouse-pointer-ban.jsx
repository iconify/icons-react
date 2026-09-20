import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r19yuzbka.css';
import '../../css/z/zs13s_bpz.css';
import '../../css/k/kxnxc9bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r19yuzbka"/><circle class="zs13s_bpz"/><path class="kxnxc9bzf"/></g>`,
		"fallback": "lucide:mouse-pointer-ban",
	});
}

export default Component;
