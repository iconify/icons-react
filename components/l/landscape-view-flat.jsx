import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v4qqlvsfp.css';
import '../../css/i/i2djolb3a.css';
import '../../css/k/kt46szbuc.css';
import '../../css/c/cbam21neb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v4qqlvsfp"/><path class="i2djolb3a"/><path class="kt46szbuc"/><path class="cbam21neb"/></g>`,
		"fallback": "streamline-plump-color:landscape-view-flat",
	});
}

export default Component;
