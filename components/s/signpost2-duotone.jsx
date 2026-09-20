import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t3jygp3ru.css';
import '../../css/m/m03yfgb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t3jygp3ru"/><path class="m03yfgb9s"/></g>`,
		"fallback": "reicon:signpost2-duotone",
	});
}

export default Component;
