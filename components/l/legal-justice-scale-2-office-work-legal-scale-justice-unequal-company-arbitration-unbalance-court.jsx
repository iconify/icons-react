import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abcafz4kd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abcafz4kd"/>`,
		"fallback": "streamline:legal-justice-scale-2-office-work-legal-scale-justice-unequal-company-arbitration-unbalance-court",
	});
}

export default Component;
