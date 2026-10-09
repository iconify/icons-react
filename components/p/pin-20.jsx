import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8fvfdcfq.css';
import '../../css/n/n9js5qbjq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8fvfdcfq"/><path class="n9js5qbjq"/>`,
		"fallback": "energy-icons:pin-20",
	});
}

export default Component;
