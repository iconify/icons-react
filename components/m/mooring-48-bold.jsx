import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a42jbyb6c.css';
import '../../css/j/j68mnuhyh.css';
import '../../css/v/vyt0ikbhv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a42jbyb6c"/><path class="j68mnuhyh"/><path class="vyt0ikbhv"/>`,
		"fallback": "energy-icons:mooring-48-bold",
	});
}

export default Component;
