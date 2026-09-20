import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/npx9-2bkr.css';
import '../../css/f/f38ujc19q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="npx9-2bkr"/><path class="f38ujc19q"/></g>`,
		"fallback": "streamline-plump-color:rectangle-flag-flat",
	});
}

export default Component;
