import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xh7p-_tmw.css';
import '../../css/s/smlt2l86m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xh7p-_tmw"/><path class="smlt2l86m"/></g>`,
		"fallback": "hugeicons:printer-off",
	});
}

export default Component;
