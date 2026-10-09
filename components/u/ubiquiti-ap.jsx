import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyx9xhn2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyx9xhn2b"/>`,
		"fallback": "cbi:ubiquiti-ap",
	});
}

export default Component;
