import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gu-edh1mv.css';
import '../../css/p/pgnmi7bkq.css';
import '../../css/o/oi9f8ebmy.css';
import '../../css/s/sj5jaeqkj.css';
import '../../css/o/o-6ip5p-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gu-edh1mv"/><path class="pgnmi7bkq"/><path class="oi9f8ebmy"/><path class="sj5jaeqkj"/><path class="o-6ip5p-r"/></g>`,
		"fallback": "streamline-ultimate-color:road-sign-stop",
	});
}

export default Component;
