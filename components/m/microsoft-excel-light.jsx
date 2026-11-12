import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvmnxt6ft.css';
import '../../css/m/mkor83bnq.css';
import '../../css/m/m8r9zubhb.css';
import '../../css/y/y1mciqk_m.css';
import '../../css/d/dbqjt5bjh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvmnxt6ft"/><path class="mkor83bnq"/><path class="m8r9zubhb"/><path class="y1mciqk_m"/><path class="dbqjt5bjh"/>`,
		"fallback": "selfhst:microsoft-excel-light",
	});
}

export default Component;
