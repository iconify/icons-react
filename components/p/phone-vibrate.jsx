import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/k/ko0nadpjq.css';
import '../../css/v/vgcxerb0z.css';
import '../../css/k/kko1jcctn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="ko0nadpjq"/><path class="vgcxerb0z"/><path class="kko1jcctn"/></g>`,
		"fallback": "streamline-plump:phone-vibrate",
	});
}

export default Component;
