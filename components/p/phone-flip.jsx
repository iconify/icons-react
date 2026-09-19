import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqnpvm_tt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqnpvm_tt"/>`,
		"fallback": "fa6-solid:phone-flip",
	});
}

export default Component;
