import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtkkymsak.css';
import '../../css/p/p3c5m7b3f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtkkymsak"/><path class="p3c5m7b3f"/>`,
		"fallback": "energy-icons:rivet-20",
	});
}

export default Component;
