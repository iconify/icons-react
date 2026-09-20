import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qbo-06bir.css';
import '../../css/p/ps3-lcbfd.css';
import '../../css/b/b281nlban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qbo-06bir"/><path class="ps3-lcbfd"/><path class="b281nlban"/></g>`,
		"fallback": "streamline-ultimate:skating-1",
	});
}

export default Component;
