import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyoe3cbdf.css';
import '../../css/j/jkakw8j_l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyoe3cbdf"/><path class="jkakw8j_l"/>`,
		"fallback": "energy-icons:landslide-48",
	});
}

export default Component;
