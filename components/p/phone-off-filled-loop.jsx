import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-4cqm.css';
import '../../css/t/t5pxry.css';
import '../../css/o/oxx-om.css';
import '../../css/q/qjy1lv.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-62.css';
import '../../css/t/tr-b5mmly.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1F6EyceA"><path class="g-4cqm t5pxry"/><path class="oxx-om qjy1lv t5pxry"/></mask></defs><path mask="url(#SVG1F6EyceA)" class="botfzx"/><path class="gd_4-q qjy1lv t5pxry"/>`,
		"fallback": "line-md:phone-off-filled-loop",
	});
}

export default Component;
