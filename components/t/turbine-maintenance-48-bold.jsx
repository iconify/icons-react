import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocxzmlbuv.css';
import '../../css/w/wr0ronh9v.css';
import '../../css/i/iiv2y_blz.css';
import '../../css/b/b8indbcik.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocxzmlbuv"/><path class="wr0ronh9v"/><path class="iiv2y_blz"/><path class="b8indbcik"/>`,
		"fallback": "energy-icons:turbine-maintenance-48-bold",
	});
}

export default Component;
