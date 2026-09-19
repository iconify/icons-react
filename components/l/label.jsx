import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_2-9c3fr.css';
import '../../css/z/zq-0s9biw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_2-9c3fr"/><path class="zq-0s9biw"/>`,
		"fallback": "carbon:label",
	});
}

export default Component;
