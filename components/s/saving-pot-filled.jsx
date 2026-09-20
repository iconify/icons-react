import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvpyx4bjk.css';
import '../../css/a/ac0sjm13i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvpyx4bjk"/><path class="ac0sjm13i"/>`,
		"fallback": "tdesign:saving-pot-filled",
	});
}

export default Component;
