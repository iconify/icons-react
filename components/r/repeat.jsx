import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/n/ndjr08ioc.css';
import '../../css/o/otuq7d52p.css';
import '../../css/g/ghcq3vt4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ndjr08ioc wm-k"/><path class="otuq7d52p wm-a"/><path class="ghcq3vt4r wm-deco"/></g>`,
		"fallback": "withicons-kawaii:repeat",
	});
}

export default Component;
