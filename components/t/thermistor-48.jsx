import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snsrwjb2q.css';
import '../../css/a/a35pl3byc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snsrwjb2q"/><path class="a35pl3byc"/>`,
		"fallback": "energy-icons:thermistor-48",
	});
}

export default Component;
