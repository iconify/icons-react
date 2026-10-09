import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trz8ofble.css';
import '../../css/d/diva08b7c.css';
import '../../css/v/vxg-v0wsr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trz8ofble"/><path class="diva08b7c"/><path class="vxg-v0wsr"/>`,
		"fallback": "energy-icons:rainbow-20",
	});
}

export default Component;
