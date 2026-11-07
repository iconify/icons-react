import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/nj3877h8f.css';
import '../../css/b/bej489v3t.css';
import '../../css/p/pjctnbcqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="nj3877h8f"/><path class="bej489v3t"/></g><path class="pjctnbcqu"/>`,
		"fallback": "solar:telescope-bold-duotone",
	});
}

export default Component;
