import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cs4oel9os.css';
import '../../css/o/otz57pxwg.css';
import '../../css/o/osdk9kf8g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="cs4oel9os"/><path class="otz57pxwg"/><path class="osdk9kf8g"/></g>`,
		"fallback": "icon-park-solid:laptop",
	});
}

export default Component;
