import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ii3b9xbkx.css';
import '../../css/t/t8r6agbqp.css';
import '../../css/b/bn9scm_6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ii3b9xbkx"/><path class="t8r6agbqp"/><path class="bn9scm_6r"/></g>`,
		"fallback": "reicon:mini-music-sqaure",
	});
}

export default Component;
