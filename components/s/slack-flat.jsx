import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/azaimob5t.css';
import '../../css/c/cmzwv0sgv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="azaimob5t"/><path class="cmzwv0sgv"/></g>`,
		"fallback": "streamline-plump-color:slack-flat",
	});
}

export default Component;
