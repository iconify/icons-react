import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hda81ubct.css';
import '../../css/o/ot3162boi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hda81ubct"/><path class="ot3162boi"/>`,
		"fallback": "energy-icons:paw-48-bold",
	});
}

export default Component;
