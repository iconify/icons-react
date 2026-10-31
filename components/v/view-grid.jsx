import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mdan5fbgb.css';
import '../../css/l/ldhgq_bhs.css';
import '../../css/d/d5f2c0bgw.css';
import '../../css/h/h65i17bwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="mdan5fbgb"/><rect class="ldhgq_bhs"/><rect class="d5f2c0bgw"/><rect class="h65i17bwa"/></g>`,
		"fallback": "struq:view-grid",
	});
}

export default Component;
