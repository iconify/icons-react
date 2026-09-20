import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ayufzybcf.css';
import '../../css/v/v5i1zqb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ayufzybcf"/><path class="v5i1zqb1s"/></g>`,
		"fallback": "streamline-sharp-color:upload-computer-flat",
	});
}

export default Component;
