import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/vw7yqhc0j.css';
import '../../css/m/miqvqdosu.css';
import '../../css/v/vkl7yebus.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="vw7yqhc0j"/><path class="miqvqdosu"/><path class="vkl7yebus"/></g>`,
		"fallback": "marketeq:sticky-notes-2",
	});
}

export default Component;
