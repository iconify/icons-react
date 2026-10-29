import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f25aqb1cu.css';
import '../../css/p/pz3wkb9vt.css';
import '../../css/n/nonzebbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f25aqb1cu wm-k"/><path class="pz3wkb9vt wm-a"/><path class="nonzebbze wm-a"/>`,
		"fallback": "withicons-bauhaus:reply-all",
	});
}

export default Component;
