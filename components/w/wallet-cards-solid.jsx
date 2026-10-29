import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qqpfptilo.css';
import '../../css/p/pgwtwwjpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qqpfptilo"/><path class="pgwtwwjpt wm-a"/></g>`,
		"fallback": "withicons:wallet-cards-solid",
	});
}

export default Component;
