import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk81lsb-f.css';
import '../../css/v/vmw5ydxzv.css';
import '../../css/t/ta92rdbgt.css';
import '../../css/q/qiqf2wm_a.css';
import '../../css/y/yfoxxnbix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk81lsb-f"/><path class="vmw5ydxzv"/><path class="ta92rdbgt"/><path class="qiqf2wm_a"/><path class="yfoxxnbix"/>`,
		"fallback": "energy-icons:tripod-foundation-20-bold",
	});
}

export default Component;
