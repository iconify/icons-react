import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/r36q9z2wp.css';
import '../../css/o/o0ghn90ei.css';
import '../../css/i/i91bbbg-m.css';
import '../../css/v/vttpfcc7k.css';
import '../../css/v/vg_w0kzln.css';
import '../../css/b/b86m5ybhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="r36q9z2wp wm-deco"/><path class="o0ghn90ei wm-deco"/><path class="i91bbbg-m wm-deco"/><path class="vttpfcc7k wm-k"/><path class="vg_w0kzln wm-a"/><path class="b86m5ybhz wm-a"/></g>`,
		"fallback": "withicons:leaf-blueprint",
	});
}

export default Component;
