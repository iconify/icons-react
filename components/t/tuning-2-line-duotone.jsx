import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lyac2jmak.css';
import '../../css/z/zavg8bcsl.css';
import '../../css/k/kancj-buo.css';
import '../../css/r/r60x9s_xf.css';
import '../../css/i/io9xp6bva.css';
import '../../css/s/sowea2b_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lyac2jmak"/><path class="zavg8bcsl"/><path class="kancj-buo"/><path class="r60x9s_xf"/><path class="io9xp6bva"/><path class="sowea2b_e"/></g>`,
		"fallback": "solar:tuning-2-line-duotone",
	});
}

export default Component;
