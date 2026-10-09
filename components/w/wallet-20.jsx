import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzf2d5c2n.css';
import '../../css/t/tox1-wblc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzf2d5c2n"/><path class="tox1-wblc"/>`,
		"fallback": "energy-icons:wallet-20",
	});
}

export default Component;
