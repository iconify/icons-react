import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsgd_fb3n.css';

const viewBox = {"width":684,"height":1568};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsgd_fb3n"/>`,
		"fallback": "thesvg-color:ralph-lauren-dark",
	});
}

export default Component;
