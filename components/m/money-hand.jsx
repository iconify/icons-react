import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgckyq4_m.css';
import '../../css/s/sy9lcgb4a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgckyq4_m"/><path class="sy9lcgb4a"/>`,
		"fallback": "temaki:money-hand",
	});
}

export default Component;
