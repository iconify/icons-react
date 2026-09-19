import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/e/ebdsdwxiu.css';
import '../../css/g/g05owg7bi.css';
import '../../css/m/mldr_ccaf.css';
import '../../css/v/v20a3bqdv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="ebdsdwxiu"/><path class="g05owg7bi"/><circle class="mldr_ccaf"/><circle class="v20a3bqdv"/></g>`,
		"fallback": "icon-park:riding",
	});
}

export default Component;
