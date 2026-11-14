import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bzz6owvpl.css';
import '../../css/z/zpd2lukgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bzz6owvpl"/><path class="zpd2lukgm"/></g>`,
		"fallback": "hugeicons:message-upload-02",
	});
}

export default Component;
