import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1s64xbrq.css';
import '../../css/m/mks5szpdx.css';
import '../../css/m/m6ojtjbis.css';
import '../../css/a/auadwsfgw.css';
import '../../css/b/bo7lrhx-f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1s64xbrq"/><path class="mks5szpdx"/><path class="m6ojtjbis"/><path class="auadwsfgw"/><path class="bo7lrhx-f"/>`,
		"fallback": "energy-icons:surge-arrester-48-bold",
	});
}

export default Component;
