import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctfudzq1d.css';
import '../../css/i/i2hbb3ney.css';
import '../../css/w/wfy5j2bud.css';
import '../../css/g/g0b7pibhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ctfudzq1d"/><circle class="i2hbb3ney"/><circle class="wfy5j2bud"/><path class="g0b7pibhi"/>`,
		"fallback": "eos-icons:scientist-outlined",
	});
}

export default Component;
