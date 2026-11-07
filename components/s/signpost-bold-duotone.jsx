import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8b3tsbxv.css';
import '../../css/e/ets3hjqlz.css';
import '../../css/c/cbsg9jbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r8b3tsbxv"/><path class="ets3hjqlz"/><path class="cbsg9jbek"/>`,
		"fallback": "solar:signpost-bold-duotone",
	});
}

export default Component;
