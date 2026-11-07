import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai3i1kb5k.css';
import '../../css/h/h34kibbvp.css';
import '../../css/t/t_-ae6ize.css';
import '../../css/d/dt8sml-7w.css';
import '../../css/u/uod10pbew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai3i1kb5k"/><path class="h34kibbvp"/><path class="t_-ae6ize"/><path class="dt8sml-7w"/><path class="uod10pbew"/>`,
		"fallback": "solar:playback-speed-bold",
	});
}

export default Component;
