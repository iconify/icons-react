import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzthrzbpn.css';
import '../../css/z/zvjeae8vn.css';
import '../../css/t/tdqgqzbcw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzthrzbpn"/><path clip-rule="evenodd" class="zvjeae8vn"/><path class="tdqgqzbcw"/>`,
		"fallback": "qlementine-icons:ui-panels-left-right-16",
	});
}

export default Component;
