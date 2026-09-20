import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gufd03s5p.css';
import '../../css/t/td4pmbm2c.css';
import '../../css/v/velahuttd.css';
import '../../css/m/meq3lcc_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="gufd03s5p"/><rect class="td4pmbm2c"/><rect class="velahuttd"/><path class="meq3lcc_g"/></g>`,
		"fallback": "lucide-lab:layout-grid-plus",
	});
}

export default Component;
