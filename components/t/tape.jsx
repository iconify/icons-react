import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/u/uvawkc25s.css';
import '../../css/q/qy9y1lupx.css';
import '../../css/w/wlnc9cnle.css';
import '../../css/m/mkp5-9min.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIqccwQVC"><g class="ufeehvblu"><path class="uvawkc25s"/><path clip-rule="evenodd" class="qy9y1lupx"/><path class="wlnc9cnle"/><path class="mkp5-9min"/></g></mask></defs><path mask="url(#SVGIqccwQVC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:tape",
	});
}

export default Component;
