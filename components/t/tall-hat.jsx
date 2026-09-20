import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyw9t_qqp.css';
import '../../css/d/don06ebsn.css';
import '../../css/m/mvzpmhbis.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hyw9t_qqp"/><path clip-rule="evenodd" class="don06ebsn"/><path class="mvzpmhbis"/></g>`,
		"fallback": "streamline-color:tall-hat",
	});
}

export default Component;
