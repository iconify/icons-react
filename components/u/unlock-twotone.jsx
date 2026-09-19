import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwbmeku4p.css';
import '../../css/y/yp5ecdcuz.css';
import '../../css/k/ko513mbji.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwbmeku4p"/><path class="yp5ecdcuz"/><path class="ko513mbji"/>`,
		"fallback": "ant-design:unlock-twotone",
	});
}

export default Component;
