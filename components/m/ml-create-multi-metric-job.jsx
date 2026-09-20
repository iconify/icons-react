import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3-2ppbxq.css';
import '../../css/s/sc7gseb_b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouiIcon__fillSecondary r3-2ppbxq"/><path class="sc7gseb_b"/>`,
		"fallback": "oui:ml-create-multi-metric-job",
	});
}

export default Component;
