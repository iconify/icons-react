import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xqkznob5a.css';
import '../../css/z/z8ec_ubvd.css';
import '../../css/l/l4do04bvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xqkznob5a"/><path class="z8ec_ubvd"/><path class="l4do04bvm"/></g>`,
		"fallback": "streamline-freehand-color:optimization-configuration",
	});
}

export default Component;
