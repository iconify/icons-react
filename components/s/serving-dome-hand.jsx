import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brpj7-nii.css';
import '../../css/g/g67t3oa_p.css';
import '../../css/p/p7xf1nb2p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="brpj7-nii"/><path class="g67t3oa_p"/><path class="p7xf1nb2p"/></g>`,
		"fallback": "streamline-flex-color:serving-dome-hand",
	});
}

export default Component;
