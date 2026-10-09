import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8zyk_juu.css';
import '../../css/b/bhtgracju.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8zyk_juu"/><path class="bhtgracju"/>`,
		"fallback": "energy-icons:voltmeter-20",
	});
}

export default Component;
