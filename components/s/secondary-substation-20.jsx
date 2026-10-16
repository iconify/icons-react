import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3evabc0f.css';
import '../../css/e/eojyj2bbi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3evabc0f"/><path class="eojyj2bbi"/>`,
		"fallback": "energy-icons:secondary-substation-20",
	});
}

export default Component;
