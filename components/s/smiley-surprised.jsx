import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fb5uc22li.css';
import '../../css/g/glsw0x0fa.css';
import '../../css/v/vu-c712lo.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/k/k3ano_pcw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fb5uc22li"/><path class="glsw0x0fa"/><path class="vu-c712lo"/><path class="xjfc-xbtr"/><path class="k3ano_pcw"/></g>`,
		"fallback": "streamline-color:smiley-surprised",
	});
}

export default Component;
