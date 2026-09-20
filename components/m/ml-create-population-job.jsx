import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzorb_z0w.css';
import '../../css/s/slpzz11by.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzorb_z0w"/><path class="ouiIcon__fillSecondary slpzz11by"/>`,
		"fallback": "oui:ml-create-population-job",
	});
}

export default Component;
