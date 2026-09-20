import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tsodojq_y.css';
import '../../css/f/fqkgllbrl.css';
import '../../css/m/m6tzai20r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tsodojq_y"/><path class="fqkgllbrl"/><path class="m6tzai20r"/></g>`,
		"fallback": "streamline-ultimate:video-file-star",
	});
}

export default Component;
