import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev4nrv7df.css';
import '../../css/d/dfad6bbbt.css';
import '../../css/a/axuha0b4s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev4nrv7df"/><path class="dfad6bbbt"/><path class="axuha0b4s"/>`,
		"fallback": "energy-icons:police-station-20",
	});
}

export default Component;
