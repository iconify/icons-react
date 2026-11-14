import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/acua8t__b.css';
import '../../css/s/s1gb9bb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="acua8t__b"/><path class="s1gb9bb3e"/></g>`,
		"fallback": "hugeicons:message-outgoing-02",
	});
}

export default Component;
