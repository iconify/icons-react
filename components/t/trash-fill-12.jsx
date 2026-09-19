import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srz00hnfq.css';
import '../../css/d/dl1wr10wi.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srz00hnfq"/><path class="dl1wr10wi"/>`,
		"fallback": "garden:trash-fill-12",
	});
}

export default Component;
