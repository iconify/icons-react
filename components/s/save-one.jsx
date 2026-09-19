import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xtopb3i4q.css';
import '../../css/x/x-825qbfb.css';
import '../../css/u/uxt7hetvo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjUo5KfJE"><g class="rohhhzb0l"><path class="xtopb3i4q"/><path class="x-825qbfb"/><path class="uxt7hetvo"/></g></mask></defs><path mask="url(#SVGjUo5KfJE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:save-one",
	});
}

export default Component;
