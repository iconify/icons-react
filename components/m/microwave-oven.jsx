import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjawsos1p.css';
import '../../css/q/qsyvbtbcu.css';
import '../../css/j/j0zsirbgl.css';
import '../../css/w/whg4aks8m.css';
import '../../css/m/mmjblgbjx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="tjawsos1p"/><path class="qsyvbtbcu"/><path class="j0zsirbgl"/><circle class="whg4aks8m"/><path class="mmjblgbjx"/></g>`,
		"fallback": "icon-park-solid:microwave-oven",
	});
}

export default Component;
