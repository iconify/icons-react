import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc9l-bcsn.css';
import '../../css/b/b16rfrbit.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc9l-bcsn"/><path class="b16rfrbit"/>`,
		"fallback": "carbon:package",
	});
}

export default Component;
