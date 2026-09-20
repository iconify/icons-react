import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v569z1whg.css';
import '../../css/s/sy9cqcbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v569z1whg"/><path class="sy9cqcbxh"/>`,
		"fallback": "mingcute:roblox-line",
	});
}

export default Component;
