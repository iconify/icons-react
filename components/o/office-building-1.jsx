import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2pozx63e.css';
import '../../css/w/wt91hgbmz.css';
import '../../css/w/w0ih7xbry.css';
import '../../css/o/oint8ybme.css';
import '../../css/o/ohh-8ubbs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p2pozx63e"/><path class="wt91hgbmz"/><path class="w0ih7xbry"/><path class="oint8ybme"/><path class="ohh-8ubbs"/></g>`,
		"fallback": "streamline-flex-color:office-building-1",
	});
}

export default Component;
