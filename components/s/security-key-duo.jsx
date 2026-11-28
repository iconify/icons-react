import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smirgkmzn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pbji87ens.css';
import '../../css/x/x20ovybwp.css';
import '../../css/u/ueob06b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary smirgkmzn"/><g class="dt0cm9dhy primary"><path class="pbji87ens"/><path class="x20ovybwp"/><path class="ueob06b-h"/></g>`,
		"fallback": "iconaut:security-key-duo",
	});
}

export default Component;
