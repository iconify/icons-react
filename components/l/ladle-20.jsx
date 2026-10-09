import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwpdu4b2p.css';
import '../../css/x/xfd9_p-un.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwpdu4b2p"/><path class="xfd9_p-un"/>`,
		"fallback": "energy-icons:ladle-20",
	});
}

export default Component;
