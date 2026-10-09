import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1oumu-ip.css';
import '../../css/d/dx356g9xe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1oumu-ip"/><path class="dx356g9xe"/>`,
		"fallback": "energy-icons:parking-20",
	});
}

export default Component;
