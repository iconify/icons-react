import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ka33u2bhe.css';
import '../../css/o/olhvvccak.css';
import '../../css/u/uii-qib3b.css';
import '../../css/i/ivrn0gbdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ka33u2bhe"/><path class="olhvvccak"/><path class="uii-qib3b"/><circle class="ivrn0gbdm"/></g>`,
		"fallback": "lucide:rose",
	});
}

export default Component;
