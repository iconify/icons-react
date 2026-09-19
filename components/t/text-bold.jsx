import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6g817zjy.css';
import '../../css/k/k3nn7hxsv.css';
import '../../css/y/yto2jk_qy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="o6g817zjy"><path class="k3nn7hxsv"/><path class="yto2jk_qy"/></g>`,
		"fallback": "icon-park:text-bold",
	});
}

export default Component;
