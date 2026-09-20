import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw6kjunoo.css';
import '../../css/w/w81nml9tu.css';
import '../../css/c/cudx1bbrx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cw6kjunoo"/><path class="w81nml9tu"/><path clip-rule="evenodd" class="cudx1bbrx"/></g>`,
		"fallback": "streamline-plump-color:mail-setting-flat",
	});
}

export default Component;
