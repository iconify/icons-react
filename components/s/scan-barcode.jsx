import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hv-edyz7g.css';
import '../../css/u/u-ondkb2j.css';
import '../../css/y/yylyjobva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hv-edyz7g wm-k"/><path class="u-ondkb2j wm-a"/><path class="yylyjobva"/></g>`,
		"fallback": "withicons-bauhaus:scan-barcode",
	});
}

export default Component;
