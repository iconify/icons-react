import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lmoo01bav.css';
import '../../css/b/b2y5-tb-v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGO2OHRbQe"><g class="ufeehvblu"><path class="lmoo01bav"/><path class="b2y5-tb-v"/></g></mask></defs><path mask="url(#SVGO2OHRbQe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:sales-report",
	});
}

export default Component;
