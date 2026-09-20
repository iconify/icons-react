import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tlqqhh01s.css';
import '../../css/h/hc8c75bqc.css';
import '../../css/a/agu5i8wku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tlqqhh01s"/><path class="hc8c75bqc"/><path class="agu5i8wku"/></g>`,
		"fallback": "solar:user-heart-rounded-outline",
	});
}

export default Component;
