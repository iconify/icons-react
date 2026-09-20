import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ntwim0o9y.css';
import '../../css/k/k9kcd2bwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ntwim0o9y"/><path class="k9kcd2bwl"/></g>`,
		"fallback": "streamline-plump-color:lightning-cloud-flat",
	});
}

export default Component;
