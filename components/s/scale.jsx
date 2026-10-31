import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sdwarxh-d.css';
import '../../css/k/k84vtocml.css';
import '../../css/b/bropegbcq.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="sdwarxh-d"/><path class="k84vtocml wm-k"/><path class="bropegbcq wm-a"/><path class="jgtis7b9v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:scale",
	});
}

export default Component;
