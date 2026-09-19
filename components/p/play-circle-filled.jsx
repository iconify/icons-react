import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcch2tboj.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcch2tboj"/>`,
		"fallback": "ant-design:play-circle-filled",
	});
}

export default Component;
