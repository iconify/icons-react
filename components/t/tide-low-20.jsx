import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5m3vuabl.css';
import '../../css/l/l0896yttc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5m3vuabl"/><path class="l0896yttc"/>`,
		"fallback": "energy-icons:tide-low-20",
	});
}

export default Component;
