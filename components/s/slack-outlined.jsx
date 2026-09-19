import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe6cqt_uj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe6cqt_uj"/>`,
		"fallback": "ant-design:slack-outlined",
	});
}

export default Component;
