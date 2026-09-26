import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/q5tvtipym.css';
import '../../css/c/cvu7sfbsh.css';
import '../../css/e/enrimacpv.css';
import '../../css/e/ere_svpaf.css';
import '../../css/n/ndg6fnbyv.css';
import '../../css/s/s7iocyb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="q5tvtipym"/><path class="cvu7sfbsh"/></g><path class="enrimacpv"/><path class="ere_svpaf"/><path class="ndg6fnbyv"/><path class="s7iocyb1x"/></g>`,
		"fallback": "solar:smartphone-rotate-orientation-bold-duotone",
	});
}

export default Component;
