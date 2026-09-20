import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/o328-gbfi.css';
import '../../css/i/ia66voywb.css';
import '../../css/r/rpf22vb-r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="o328-gbfi"/><path class="ia66voywb"/><path class="rpf22vb-r"/></g>`,
		"fallback": "streamline-plump:upload-box-1",
	});
}

export default Component;
