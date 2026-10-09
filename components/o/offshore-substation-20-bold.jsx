import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxgyedcli.css';
import '../../css/v/vr6bwvoqs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxgyedcli"/><path class="vr6bwvoqs"/>`,
		"fallback": "energy-icons:offshore-substation-20-bold",
	});
}

export default Component;
