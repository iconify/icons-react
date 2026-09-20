import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kdpl1_b6g.css';
import '../../css/t/tnz6rr6tu.css';
import '../../css/m/m9c-xccpi.css';
import '../../css/v/v81qvsl_p.css';
import '../../css/s/ssza2qbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kdpl1_b6g"/><path clip-rule="evenodd" class="tnz6rr6tu"/><path class="m9c-xccpi"/><path clip-rule="evenodd" class="v81qvsl_p"/><path class="ssza2qbav"/></g>`,
		"fallback": "reicon:radio-duotone",
	});
}

export default Component;
