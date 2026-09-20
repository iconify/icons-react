import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/leyjrcbbi.css';
import '../../css/v/vwn7kab9a.css';
import '../../css/y/ym9bamjlv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="leyjrcbbi"/><path clip-rule="evenodd" class="vwn7kab9a"/><path clip-rule="evenodd" class="ym9bamjlv"/></g>`,
		"fallback": "streamline-flex-color:justice-scale-1-flat",
	});
}

export default Component;
