import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o__tn2b4j.css';
import '../../css/l/l_eiac87f.css';
import '../../css/e/ek4t_vbai.css';
import '../../css/b/b01e3syqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o__tn2b4j"/><path class="l_eiac87f"/><rect class="ek4t_vbai"/><rect class="b01e3syqa"/></g>`,
		"fallback": "lets-icons:trash-duotone",
	});
}

export default Component;
