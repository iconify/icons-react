import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-xoz76qe.css';
import '../../css/e/evv5habqz.css';
import '../../css/q/qoqdzrk5v.css';
import '../../css/b/bbwljpc5r.css';
import '../../css/y/ye7rvgvji.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y-xoz76qe"/><path clip-rule="evenodd" class="evv5habqz"/><path class="qoqdzrk5v"/><path class="bbwljpc5r"/><path clip-rule="evenodd" class="ye7rvgvji"/></g>`,
		"fallback": "streamline-plump-color:production-belt-flat",
	});
}

export default Component;
