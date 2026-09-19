import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m640nac0w.css';
import '../../css/b/bbh__hbjv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m640nac0w"/><path class="bbh__hbjv"/>`,
		"fallback": "ant-design:rotate-right-outlined",
	});
}

export default Component;
