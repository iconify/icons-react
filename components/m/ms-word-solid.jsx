import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zknrt17wv.css';
import '../../css/o/oufzmac7u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zknrt17wv"/><path clip-rule="evenodd" class="oufzmac7u"/>`,
		"fallback": "teenyicons:ms-word-solid",
	});
}

export default Component;
