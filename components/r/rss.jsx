import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gkqy2ebkr.css';
import '../../css/b/bbj86qeqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gkqy2ebkr"/><circle class="bbj86qeqv"/></g>`,
		"fallback": "lucide:rss",
	});
}

export default Component;
