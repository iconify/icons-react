import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr7_wabhq.css';
import '../../css/r/r3nawdb_c.css';
import '../../css/o/ok5c6eb9i.css';
import '../../css/h/h_rhu0bov.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr7_wabhq"/><path class="r3nawdb_c"/><path class="ok5c6eb9i"/><path class="h_rhu0bov"/>`,
		"fallback": "energy-icons:taxi-20",
	});
}

export default Component;
