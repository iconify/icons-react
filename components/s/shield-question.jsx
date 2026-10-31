import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/r/reshl9bws.css';
import '../../css/z/zi574gbhn.css';
import '../../css/o/ouw5kpbrn.css';
import '../../css/v/v5dtwfb0w.css';
import '../../css/g/ghcq3vt4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="reshl9bws"/><path class="wm-shine zi574gbhn"/><path class="ouw5kpbrn wm-k"/><path class="v5dtwfb0w wm-a"/><path class="ghcq3vt4r wm-deco"/></g>`,
		"fallback": "withicons-kawaii:shield-question",
	});
}

export default Component;
