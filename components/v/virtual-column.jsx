import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh21c1arq.css';
import '../../css/g/gin_3l1fi.css';
import '../../css/y/yzfdw0bro.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh21c1arq"/><path class="gin_3l1fi"/><path class="yzfdw0bro"/>`,
		"fallback": "carbon:virtual-column",
	});
}

export default Component;
