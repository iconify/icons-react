import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ak-drqc-a.css';
import '../../css/e/es_f_abip.css';
import '../../css/q/qg4ud0b0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ak-drqc-a"/><path class="es_f_abip"/><path class="qg4ud0b0f"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-start-percent-duotone",
	});
}

export default Component;
