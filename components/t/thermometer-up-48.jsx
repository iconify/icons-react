import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxju_n3um.css';
import '../../css/t/tyo480b-b.css';
import '../../css/o/o-4655baq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxju_n3um"/><path class="tyo480b-b"/><path class="o-4655baq"/>`,
		"fallback": "energy-icons:thermometer-up-48",
	});
}

export default Component;
