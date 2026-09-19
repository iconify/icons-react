import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm3xmebmn.css';
import '../../css/a/aglz3sohk.css';
import '../../css/z/zjcvkggsp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm3xmebmn"/><path class="aglz3sohk"/><path class="zjcvkggsp"/>`,
		"fallback": "ant-design:property-safety-twotone",
	});
}

export default Component;
