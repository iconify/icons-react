import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p96048g-o.css';
import '../../css/m/mqdh37b6l.css';
import '../../css/e/en-orubxp.css';
import '../../css/x/xu73cdcji.css';
import '../../css/v/v3bzhxbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="p96048g-o"/><path class="mqdh37b6l wm-shine"/><path class="en-orubxp wm-k"/><path class="wm-a xu73cdcji"/><path class="v3bzhxbbh wm-deco"/></g>`,
		"fallback": "withicons-kawaii:santa-hat",
	});
}

export default Component;
