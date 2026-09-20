import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/oy1_yjbvd.css';
import '../../css/v/v27y_ex4z.css';
import '../../css/u/ui3fuxb6a.css';
import '../../css/a/aalu_cbhj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="oy1_yjbvd"/><path class="v27y_ex4z"/><path class="ui3fuxb6a"/><path class="aalu_cbhj"/></g>`,
		"fallback": "streamline-plump-color:tree-1",
	});
}

export default Component;
