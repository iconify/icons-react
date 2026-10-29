import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/as3krbbzb.css';
import '../../css/a/ax-9akbyt.css';
import '../../css/k/kbxro98gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="as3krbbzb"/><path class="ax-9akbyt"/><path class="kbxro98gm wm-a"/></g>`,
		"fallback": "withicons:wallet",
	});
}

export default Component;
