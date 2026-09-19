import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpe4kgbvm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpe4kgbvm"/>`,
		"fallback": "file-icons:logtalk",
	});
}

export default Component;
