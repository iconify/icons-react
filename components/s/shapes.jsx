import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dy58obbqm.css';
import '../../css/v/velahuttd.css';
import '../../css/b/bf9_qabtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dy58obbqm"/><rect class="velahuttd"/><circle class="bf9_qabtn"/></g>`,
		"fallback": "lucide:shapes",
	});
}

export default Component;
