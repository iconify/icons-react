import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o90f_1ibj.css';
import '../../css/t/t33cxfb4q.css';
import '../../css/z/z4nxktxkg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o90f_1ibj"/><path class="t33cxfb4q"/><path class="z4nxktxkg"/>`,
		"fallback": "selfhst:many-notes",
	});
}

export default Component;
