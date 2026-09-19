import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhvsifbll.css';
import '../../css/k/kwokvsbhf.css';
import '../../css/o/oli25tbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhvsifbll"/><path class="kwokvsbhf"/><path class="oli25tbif"/>`,
		"fallback": "gcp:stackdriver",
	});
}

export default Component;
