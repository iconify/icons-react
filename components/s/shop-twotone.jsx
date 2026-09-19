import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2h-50wuc.css';
import '../../css/i/imgt2lbqx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2h-50wuc"/><path class="imgt2lbqx"/>`,
		"fallback": "ant-design:shop-twotone",
	});
}

export default Component;
