import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5hcwdbtq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5hcwdbtq"/>`,
		"fallback": "f7:rocket-fill",
	});
}

export default Component;
