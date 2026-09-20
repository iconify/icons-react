import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgyc9w.css';
import '../../css/q/qtbnay.css';
import '../../css/s/sg398e.css';
import '../../css/w/wtf4wz.css';
import '../../css/m/m9360y.css';
import '../../css/c/c27knl.css';
import '../../css/f/fx1p8d.css';
import '../../css/s/so-from-28.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgyc9w qtbnay"/><path class="qtbnay sg398e"/><path class="qtbnay wtf4wz"/><path class="m9360y qtbnay"/><path class="c27knl qtbnay"/><path class="fx1p8d qtbnay"/>`,
		"fallback": "line-md:list-3-filled",
	});
}

export default Component;
