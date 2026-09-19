import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hql3ldhxa.css';
import '../../css/o/oynu9y2bq.css';
import '../../css/c/cxlln6pqv.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 hql3ldhxa"/><path class="clr-i-solid clr-i-solid-path-2 oynu9y2bq"/><path class="clr-i-solid clr-i-solid-path-3 cxlln6pqv"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:lightbulb-solid",
	});
}

export default Component;
