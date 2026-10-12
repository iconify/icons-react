import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1brf6mxa.css';
import '../../css/x/xou2jbzza.css';
import '../../css/b/bdkl8-dne.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1brf6mxa"/><path class="xou2jbzza"/><path class="bdkl8-dne"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:map-pin-x-48",
	});
}

export default Component;
