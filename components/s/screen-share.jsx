import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/imixz9b2j.css';
import '../../css/t/t1cahcc0p.css';
import '../../css/c/csac9jvtl.css';
import '../../css/v/vxuqhab0r.css';
import '../../css/x/xcvlp3yoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="imixz9b2j"/><path class="t1cahcc0p wm-shine"/><path class="csac9jvtl wm-k"/><path class="vxuqhab0r wm-a"/><path class="wm-s xcvlp3yoa"/></g>`,
		"fallback": "withicons-kawaii:screen-share",
	});
}

export default Component;
