import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kzd7r4bws.css';
import '../../css/p/p78u3gzyq.css';
import '../../css/h/hhirdqpne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kzd7r4bws"/><path class="p78u3gzyq"/><path class="hhirdqpne"/></g>`,
		"fallback": "keyline-icons:panel-right-open-dashed-fill",
	});
}

export default Component;
