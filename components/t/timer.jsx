import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zon-x9yje.css';
import '../../css/s/si-z7fbuk.css';
import '../../css/t/tbee2l8-g.css';
import '../../css/v/v4-vqmvnf.css';
import '../../css/s/s1vtn9bnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="zon-x9yje"/><path class="si-z7fbuk wm-shine"/><path class="tbee2l8-g wm-k"/><path class="v4-vqmvnf wm-a"/><path class="s1vtn9bnk wm-deco"/></g>`,
		"fallback": "withicons-kawaii:timer",
	});
}

export default Component;
