import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n90uq3bfu.css';
import '../../css/i/i1qy2-bfm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n90uq3bfu"/><path class="i1qy2-bfm ouiIcon__fillSecondary"/>`,
		"fallback": "oui:ml-create-single-metric-job",
	});
}

export default Component;
