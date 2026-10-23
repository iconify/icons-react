import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/icp-mdbnu.css';
import '../../css/r/roc0omyox.css';
import '../../css/z/zhqqtqbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="icp-mdbnu"/><path class="roc0omyox"/><path class="zhqqtqbzi"/></g>`,
		"fallback": "matita:user-circle",
	});
}

export default Component;
