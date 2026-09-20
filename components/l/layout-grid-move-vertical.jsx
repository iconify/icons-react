import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y2ls4efbx.css';
import '../../css/t/td4pmbm2c.css';
import '../../css/v/vbgobacsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="y2ls4efbx"/><rect class="td4pmbm2c"/><path class="vbgobacsc"/></g>`,
		"fallback": "lucide-lab:layout-grid-move-vertical",
	});
}

export default Component;
