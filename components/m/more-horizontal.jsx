import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jd0c3guiu.css';
import '../../css/b/bhxo75bgg.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jd0c3guiu"/><path class="bhxo75bgg"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:more-horizontal",
	});
}

export default Component;
