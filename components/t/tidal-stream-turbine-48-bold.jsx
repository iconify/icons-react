import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmxj-_ahy.css';
import '../../css/m/muoaj3btf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmxj-_ahy"/><path class="muoaj3btf"/>`,
		"fallback": "energy-icons:tidal-stream-turbine-48-bold",
	});
}

export default Component;
