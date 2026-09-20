import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qqd875bhp.css';
import '../../css/o/orj139bgi.css';
import '../../css/a/ao-hsebgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(-45 8.658 6.738)" class="qqd875bhp"/><path class="orj139bgi"/><path clip-rule="evenodd" class="ao-hsebgv"/></g>`,
		"fallback": "proicons:tag-add",
	});
}

export default Component;
