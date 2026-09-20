import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kv6rl345s.css';
import '../../css/s/skvtplblx.css';
import '../../css/a/ayo73pbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kv6rl345s"/><path class="skvtplblx"/><path class="ayo73pbzj"/></g>`,
		"fallback": "keyline-icons:music-note-off-duotone",
	});
}

export default Component;
