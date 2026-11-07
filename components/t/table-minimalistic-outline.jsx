import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8f365c-u.css';
import '../../css/j/jjp92xbjh.css';
import '../../css/m/mrmmz5sme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8f365c-u"/><path class="jjp92xbjh"/><path class="mrmmz5sme"/>`,
		"fallback": "solar:table-minimalistic-outline",
	});
}

export default Component;
