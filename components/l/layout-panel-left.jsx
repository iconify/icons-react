import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/py7iz3b4l.css';
import '../../css/y/y2ls4efbx.css';
import '../../css/t/td4pmbm2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="py7iz3b4l"/><rect class="y2ls4efbx"/><rect class="td4pmbm2c"/></g>`,
		"fallback": "lucide:layout-panel-left",
	});
}

export default Component;
