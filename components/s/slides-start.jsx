import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mnaqv781a.css';
import '../../css/g/gr512rxre.css';
import '../../css/a/a8sm415zp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 1.71 20.43)" class="mnaqv781a"/><rect transform="rotate(-90 1.71 20.43)" class="gr512rxre"/><path class="a8sm415zp"/></g>`,
		"fallback": "andrsrxn:slides-start",
	});
}

export default Component;
