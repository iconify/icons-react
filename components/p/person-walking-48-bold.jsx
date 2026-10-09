import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xijfztbzl.css';
import '../../css/f/fu-ei7b7x.css';
import '../../css/o/ohcq6p68c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xijfztbzl"/><path class="fu-ei7b7x"/><path class="ohcq6p68c"/>`,
		"fallback": "energy-icons:person-walking-48-bold",
	});
}

export default Component;
