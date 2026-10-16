import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa8mtjico.css';
import '../../css/h/hzl2uybek.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa8mtjico"/><path class="hzl2uybek"/>`,
		"fallback": "energy-icons:silicon-48",
	});
}

export default Component;
