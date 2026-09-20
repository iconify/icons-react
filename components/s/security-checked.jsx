import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzolo-p4j.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzolo-p4j"/>`,
		"fallback": "wpf:security-checked",
	});
}

export default Component;
