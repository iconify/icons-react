import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/z/zdxv5xb3f.css';
import '../../css/q/qcyr5r9hl.css';
import '../../css/e/ei_pmrbyx.css';
import '../../css/d/dsz32ft8g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="zdxv5xb3f"/><path class="qcyr5r9hl"/><path class="ei_pmrbyx"/><path class="dsz32ft8g"/></g>`,
		"fallback": "icon-park:sheep-zodiac",
	});
}

export default Component;
