import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv7_53bka.css';
import '../../css/m/m7ftp5n3b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv7_53bka"/><path class="m7ftp5n3b"/>`,
		"fallback": "energy-icons:solar-thermal-48",
	});
}

export default Component;
