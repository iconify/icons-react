import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/u/uwxf-9bdi.css';
import '../../css/b/b37zczghe.css';
import '../../css/p/pc7o77bzi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="uwxf-9bdi"/><path class="b37zczghe"/><path class="pc7o77bzi"/></g>`,
		"fallback": "icon-park-outline:scorpio",
	});
}

export default Component;
