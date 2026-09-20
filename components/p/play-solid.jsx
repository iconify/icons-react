import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exn257bnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exn257bnq"/>`,
		"fallback": "mynaui:play-solid",
	});
}

export default Component;
