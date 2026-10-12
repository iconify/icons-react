import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta5f1hbwd.css';
import '../../css/r/r-bb6_b2h.css';
import '../../css/e/ehrnxuvhv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta5f1hbwd"/><path class="r-bb6_b2h"/><path class="ehrnxuvhv"/>`,
		"fallback": "energy-icons:pig-48-bold",
	});
}

export default Component;
