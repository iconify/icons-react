import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3u49vbln.css';
import '../../css/s/sarekibri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3u49vbln"/><path class="sarekibri"/>`,
		"fallback": "eos-icons:satellite-alt",
	});
}

export default Component;
