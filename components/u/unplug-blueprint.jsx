import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zttarabgz.css';
import '../../css/r/rtmca-b9p.css';
import '../../css/e/e5vhi51no.css';
import '../../css/i/ihtbtlbkl.css';
import '../../css/f/f3ydy3l6p.css';
import '../../css/v/vgsxhnmjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zttarabgz"/><path class="rtmca-b9p wm-deco"/><path class="e5vhi51no wm-deco"/><path class="ihtbtlbkl wm-k"/><path class="f3ydy3l6p wm-a"/><path class="vgsxhnmjv wm-s"/></g>`,
		"fallback": "withicons:unplug-blueprint",
	});
}

export default Component;
