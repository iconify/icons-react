import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/e/e4e7ycc4p.css';
import '../../css/r/rzk808bet.css';
import '../../css/t/thslmvuva.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="e4e7ycc4p"/><path class="rzk808bet"/><path class="thslmvuva"/></g>`,
		"fallback": "icon-park-outline:text-wrap-overflow",
	});
}

export default Component;
