import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za715tbyv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za715tbyv"/>`,
		"fallback": "fa7-brands:tencent-weibo",
	});
}

export default Component;
