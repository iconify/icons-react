import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faahkei5l.css';
import '../../css/l/lfriz8pwt.css';
import '../../css/m/m-8ppixnq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faahkei5l"/><path class="lfriz8pwt"/><path class="m-8ppixnq"/>`,
		"fallback": "energy-icons:underground-cable-20-bold",
	});
}

export default Component;
