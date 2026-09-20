import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9whj-l1g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9whj-l1g"/>`,
		"fallback": "streamline:legal-justice-scale-1-office-work-legal-scale-justice-company-arbitration-balance-court",
	});
}

export default Component;
