import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh95h3b6d.css';
import '../../css/g/g1w9e8beh.css';
import '../../css/y/yp8fbucri.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh95h3b6d"/><path class="g1w9e8beh"/><path class="yp8fbucri"/>`,
		"fallback": "devicon:thymeleaf",
	});
}

export default Component;
