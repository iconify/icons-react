import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/doih7yb4c.css';
import '../../css/a/av_wvl8kn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="doih7yb4c"/><path class="av_wvl8kn"/></g>`,
		"fallback": "cryptocurrency-color:mft",
	});
}

export default Component;
