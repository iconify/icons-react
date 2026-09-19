import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di7y9flmv.css';
import '../../css/t/tsepx-fqx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di7y9flmv"/><path class="tsepx-fqx"/>`,
		"fallback": "carbon:phrase-sentiment",
	});
}

export default Component;
