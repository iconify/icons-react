import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7rnddcql.css';
import '../../css/h/hfbu_gb2s.css';
import '../../css/d/dk5j2el3g.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 w7rnddcql"/><path class="clr-i-outline clr-i-outline-path-2 hfbu_gb2s"/><path class="clr-i-outline clr-i-outline-path-3 dk5j2el3g"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:node-group-line",
	});
}

export default Component;
