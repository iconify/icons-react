import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gufd03s5p.css';
import '../../css/v/vzhfnmb7y.css';
import '../../css/m/m30z_ybtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="gufd03s5p"/><rect class="vzhfnmb7y"/><rect class="m30z_ybtl"/></g>`,
		"fallback": "lucide:layout-freeform",
	});
}

export default Component;
