import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj208ackd.css';
import '../../css/r/r_67kbawa.css';
import '../../css/q/qlene92hf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj208ackd"/><path class="r_67kbawa"/><path class="qlene92hf"/>`,
		"fallback": "garden:phone-waves-stroke-20",
	});
}

export default Component;
