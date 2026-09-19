import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ou9mvybfo.css';
import '../../css/x/xxw1bsbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ou9mvybfo"/><path class="xxw1bsbev"/></g>`,
		"fallback": "hugeicons:message-upload-02",
	});
}

export default Component;
