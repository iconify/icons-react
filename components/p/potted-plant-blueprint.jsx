import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/ueq1kqb5u.css';
import '../../css/u/uux33cd7c.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/w/w0t90cmpv.css';
import '../../css/g/gojyz5ibm.css';
import '../../css/c/ca4by0kxh.css';
import '../../css/b/b1zz_kbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ueq1kqb5u wm-deco"/><path class="uux33cd7c wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="w0t90cmpv wm-k"/><path class="gojyz5ibm wm-a"/><path class="ca4by0kxh wm-k"/><path class="b1zz_kbzj wm-a"/></g>`,
		"fallback": "withicons:potted-plant-blueprint",
	});
}

export default Component;
