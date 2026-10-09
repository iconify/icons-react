import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1qfvnbiq.css';
import '../../css/w/w7seexb0p.css';
import '../../css/m/m2f1aybya.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1qfvnbiq"/><path class="w7seexb0p"/><path class="m2f1aybya"/>`,
		"fallback": "energy-icons:wave-buoy-20-bold",
	});
}

export default Component;
