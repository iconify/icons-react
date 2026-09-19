import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtm_fmbjl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtm_fmbjl"/>`,
		"fallback": "ant-design:wallet-filled",
	});
}

export default Component;
