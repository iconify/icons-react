import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zzirv6pbn.css';
import '../../css/z/zu-rj5bim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zzirv6pbn"/><path class="zu-rj5bim"/></g>`,
		"fallback": "mage:mouse-2",
	});
}

export default Component;
