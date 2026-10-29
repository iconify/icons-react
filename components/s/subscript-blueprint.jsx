import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hfb4gfroc.css';
import '../../css/b/b5vz60bpb.css';
import '../../css/e/epu2q02ta.css';
import '../../css/f/fmqt1fbbf.css';
import '../../css/q/q7gyq3xar.css';
import '../../css/g/gkwrxymat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hfb4gfroc wm-deco"/><path class="b5vz60bpb wm-deco"/><path class="epu2q02ta wm-k"/><path class="fmqt1fbbf wm-a"/><path class="q7gyq3xar wm-k"/><path class="gkwrxymat wm-a"/></g>`,
		"fallback": "withicons:subscript-blueprint",
	});
}

export default Component;
