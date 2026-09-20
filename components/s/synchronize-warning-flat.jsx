import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r9i13lipj.css';
import '../../css/d/dg8kncbxd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r9i13lipj"/><path class="dg8kncbxd"/></g>`,
		"fallback": "streamline-color:synchronize-warning-flat",
	});
}

export default Component;
