import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thpy47d_f.css';
import '../../css/l/lwha5_b5g.css';
import '../../css/q/qm9invowl.css';
import '../../css/r/rm1klhb5f.css';
import '../../css/w/wb4efo_qd.css';
import '../../css/e/ecf5uvhjg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thpy47d_f"><path class="lwha5_b5g"/><circle class="qm9invowl"/><circle class="rm1klhb5f"/><circle class="wb4efo_qd"/><path class="ecf5uvhjg"/></g>`,
		"fallback": "devicon:ionic-wordmark",
	});
}

export default Component;
