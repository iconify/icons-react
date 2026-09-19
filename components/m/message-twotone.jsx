import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_a8u8b9v.css';
import '../../css/x/xwgviec-g.css';
import '../../css/b/btroue5fn.css';
import '../../css/o/ov69avbru.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_a8u8b9v"/><path class="xwgviec-g"/><path class="btroue5fn"/><path class="ov69avbru"/>`,
		"fallback": "ant-design:message-twotone",
	});
}

export default Component;
