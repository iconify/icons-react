import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l0_krduls.css';
import '../../css/g/gm3gd4twf.css';
import '../../css/o/ota-304ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="l0_krduls"/><path class="gm3gd4twf"/><path class="ota-304ni"/></g>`,
		"fallback": "streamline-ultimate:playlist-songs",
	});
}

export default Component;
