import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l99px9b1j.css';
import '../../css/z/zhugi-b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l99px9b1j"/><path class="zhugi-b5s"/>`,
		"fallback": "eos-icons:ip",
	});
}

export default Component;
