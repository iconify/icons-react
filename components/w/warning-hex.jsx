import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3wp3gbjk.css';
import '../../css/o/opai67bub.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3wp3gbjk"/><path class="opai67bub"/>`,
		"fallback": "carbon:warning-hex",
	});
}

export default Component;
