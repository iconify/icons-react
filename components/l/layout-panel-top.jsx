import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qa27x5b5v.css';
import '../../css/v/velahuttd.css';
import '../../css/t/td4pmbm2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="qa27x5b5v"/><rect class="velahuttd"/><rect class="td4pmbm2c"/></g>`,
		"fallback": "lucide:layout-panel-top",
	});
}

export default Component;
