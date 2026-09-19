import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq-zhfbfg.css';
import '../../css/d/did4e-x8k.css';
import '../../css/f/fbylp1beo.css';
import '../../css/v/v29e9xbrp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq-zhfbfg"/><path class="did4e-x8k"/><path class="fbylp1beo"/><path class="v29e9xbrp"/>`,
		"fallback": "carbon:study-transfer",
	});
}

export default Component;
