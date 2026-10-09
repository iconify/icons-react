import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjw5bmbkb.css';
import '../../css/g/gy2b850nw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjw5bmbkb"/><path class="gy2b850nw"/>`,
		"fallback": "energy-icons:map-20",
	});
}

export default Component;
