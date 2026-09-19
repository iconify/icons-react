import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja9mf_b0b.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja9mf_b0b"/>`,
		"fallback": "dinkie-icons:placard",
	});
}

export default Component;
