import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypa2l2sjm.css';
import '../../css/l/lymew2x1z.css';
import '../../css/o/o8js7wtch.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypa2l2sjm"/><path class="lymew2x1z"/><path class="o8js7wtch"/>`,
		"fallback": "devicon:salesforce",
	});
}

export default Component;
