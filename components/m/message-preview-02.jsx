import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v51nizb4t.css';
import '../../css/b/bn-3rrb-d.css';
import '../../css/b/br3q48bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v51nizb4t"/><path class="bn-3rrb-d"/><path class="br3q48bdw"/></g>`,
		"fallback": "hugeicons:message-preview-02",
	});
}

export default Component;
