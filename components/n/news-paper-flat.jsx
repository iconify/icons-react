import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thaq9qlqs.css';
import '../../css/s/sofgq3blb.css';
import '../../css/m/my9q3qq-e.css';
import '../../css/z/zc9f6b2ga.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="thaq9qlqs"/><path clip-rule="evenodd" class="sofgq3blb"/><path class="my9q3qq-e"/><path clip-rule="evenodd" class="zc9f6b2ga"/></g>`,
		"fallback": "streamline-flex-color:news-paper-flat",
	});
}

export default Component;
