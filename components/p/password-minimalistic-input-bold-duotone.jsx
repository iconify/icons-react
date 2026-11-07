import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqt3vmb-u.css';
import '../../css/j/jjt0fksdh.css';
import '../../css/o/om59irbzs.css';
import '../../css/k/k62rgabws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqt3vmb-u"/><path class="jjt0fksdh"/><path class="om59irbzs"/><path class="k62rgabws"/>`,
		"fallback": "solar:password-minimalistic-input-bold-duotone",
	});
}

export default Component;
