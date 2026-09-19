import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qsf86jbaa.css';
import '../../css/q/qhmmvbcip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qsf86jbaa"/><path class="qhmmvbcip"/></g>`,
		"fallback": "covid:personal-hygiene-clean-bottle-virus-block",
	});
}

export default Component;
