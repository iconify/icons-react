import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3b3aw3dq.css';
import '../../css/e/ez7-yab4o.css';
import '../../css/i/ix90iqaap.css';
import '../../css/w/w-_59pb_f.css';
import '../../css/x/x7kav7bpi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3b3aw3dq"/><path class="ez7-yab4o"/><path class="ix90iqaap"/><path class="w-_59pb_f"/><path class="x7kav7bpi"/>`,
		"fallback": "energy-icons:tennis-48",
	});
}

export default Component;
