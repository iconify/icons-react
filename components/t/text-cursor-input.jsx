import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy05ngn_w.css';
import '../../css/r/r76_vnpan.css';
import '../../css/b/b3q0u7byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy05ngn_w wm-k"/><path class="r76_vnpan wm-a"/><path class="b3q0u7byj wm-k"/>`,
		"fallback": "withicons-bauhaus:text-cursor-input",
	});
}

export default Component;
