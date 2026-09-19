import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckq9ugjzq.css';
import '../../css/e/eadgts_vo.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckq9ugjzq"/><path class="eadgts_vo"/>`,
		"fallback": "ant-design:stop-twotone",
	});
}

export default Component;
