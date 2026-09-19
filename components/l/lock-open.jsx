import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhfzghafj.css';

const viewBox = {"width":582,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhfzghafj"/>`,
		"fallback": "websymbol:lock-open",
	});
}

export default Component;
