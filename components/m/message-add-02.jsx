import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zn6wspt8o.css';
import '../../css/j/js2buwj6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zn6wspt8o"/><path class="js2buwj6g"/></g>`,
		"fallback": "hugeicons:message-add-02",
	});
}

export default Component;
