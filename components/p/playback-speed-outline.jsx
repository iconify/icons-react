import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grfgbmbna.css';
import '../../css/d/dt8sml-7w.css';
import '../../css/t/t_-ae6ize.css';
import '../../css/h/h34kibbvp.css';
import '../../css/h/ho4ucccvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grfgbmbna"/><path class="dt8sml-7w"/><path class="t_-ae6ize"/><path class="h34kibbvp"/><path clip-rule="evenodd" class="ho4ucccvl"/>`,
		"fallback": "solar:playback-speed-outline",
	});
}

export default Component;
