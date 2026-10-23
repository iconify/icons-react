import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sejcx8bob.css';
import '../../css/q/qyan1ybcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sejcx8bob"/><path class="qyan1ybcq"/></g>`,
		"fallback": "vadivam:square-mouse-pointer",
	});
}

export default Component;
