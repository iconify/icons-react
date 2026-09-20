import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/t17m__b3j.css';
import '../../css/d/dmi6e-cds.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="t17m__b3j"/><path class="dmi6e-cds"/></g>`,
		"fallback": "streamline-plump-color:keyboard",
	});
}

export default Component;
