import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhplffbdf.css';
import '../../css/z/zv-6rgbbp.css';
import '../../css/p/pfmh85w5h.css';
import '../../css/s/sxrpgcc4c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhplffbdf"/><path class="zv-6rgbbp"/><path class="pfmh85w5h"/><path class="sxrpgcc4c"/>`,
		"fallback": "temaki:turnstile",
	});
}

export default Component;
