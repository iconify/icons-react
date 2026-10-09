import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ori7inbrr.css';
import '../../css/q/q116iryet.css';
import '../../css/v/vyt_0h-7m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ori7inbrr"/><path class="q116iryet"/><path class="vyt_0h-7m"/>`,
		"fallback": "energy-icons:mine-shaft-48",
	});
}

export default Component;
