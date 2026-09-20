import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bq5boccwn.css';
import '../../css/a/a9ii3bcfd.css';
import '../../css/e/ehvievdim.css';
import '../../css/k/kgkp9gbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bq5boccwn"/><path class="a9ii3bcfd"/><path class="ehvievdim"/><path class="kgkp9gbnq"/></g>`,
		"fallback": "streamline-ultimate-color:messages-bubble-square-typing-1",
	});
}

export default Component;
