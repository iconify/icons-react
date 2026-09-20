import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dcn445bjj.css';
import '../../css/a/aygzp-b5i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dcn445bjj"/><path class="aygzp-b5i"/></g>`,
		"fallback": "streamline-plump-color:star-circle-flat",
	});
}

export default Component;
