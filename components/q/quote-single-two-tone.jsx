import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kcxougu7r.css';
import '../../css/x/xledahrpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kcxougu7r"/><path class="xledahrpa"/></g>`,
		"fallback": "keyline-icons:quote-single-two-tone",
	});
}

export default Component;
