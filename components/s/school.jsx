import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bf-39qigy.css';
import '../../css/o/o-xhkcqid.css';
import '../../css/r/rs-d_y_0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bf-39qigy"/><path class="o-xhkcqid"/><circle class="rs-d_y_0o"/></g>`,
		"fallback": "lucide:school",
	});
}

export default Component;
