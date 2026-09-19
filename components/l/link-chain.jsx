import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tg75f7vrc.css';
import '../../css/j/j9fvovb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tg75f7vrc"/><path class="j9fvovb8v"/></g>`,
		"fallback": "akar-icons:link-chain",
	});
}

export default Component;
