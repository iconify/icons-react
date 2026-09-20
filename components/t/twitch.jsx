import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz5b27bcw.css';
import '../../css/g/g205xvbso.css';
import '../../css/m/mqgqm8b7z.css';
import '../../css/n/ncstxp-xu.css';

const viewBox = {"width":2400,"height":2800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz5b27bcw"/><g class="g205xvbso"><path class="mqgqm8b7z"/><path class="ncstxp-xu"/></g>`,
		"fallback": "thesvg-color:twitch",
	});
}

export default Component;
