import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/slrdzkgzy.css';
import '../../css/k/kbxro98gm.css';
import '../../css/a/as3krbbzb.css';
import '../../css/a/ax-9akbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="slrdzkgzy"/><path class="kbxro98gm wm-a"/><path class="as3krbbzb"/><path class="ax-9akbyt"/></g>`,
		"fallback": "withicons:wallet-duo",
	});
}

export default Component;
