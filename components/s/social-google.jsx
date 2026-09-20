import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrml8r0nk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrml8r0nk"/>`,
		"fallback": "simple-line-icons:social-google",
	});
}

export default Component;
