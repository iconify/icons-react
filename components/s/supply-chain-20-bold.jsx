import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr0p-wb-a.css';
import '../../css/p/pp2amswub.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr0p-wb-a"/><path class="pp2amswub"/>`,
		"fallback": "energy-icons:supply-chain-20-bold",
	});
}

export default Component;
