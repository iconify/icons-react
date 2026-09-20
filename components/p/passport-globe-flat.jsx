import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7it1xbry.css';
import '../../css/p/pdc-cheye.css';
import '../../css/g/gp9no01ex.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r7it1xbry"/><path clip-rule="evenodd" class="pdc-cheye"/><path class="gp9no01ex"/></g>`,
		"fallback": "streamline-flex-color:passport-globe-flat",
	});
}

export default Component;
