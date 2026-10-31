import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/p/poaw18_iz.css';
import '../../css/m/ml2lq6y_v.css';
import '../../css/a/ao21d5blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="poaw18_iz"/><path class="ml2lq6y_v wm-shine"/><path class="ao21d5blb"/></g>`,
		"fallback": "withicons-kawaii:sidebar",
	});
}

export default Component;
