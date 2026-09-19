import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/g/g0ggjib8i.css';
import '../../css/k/kzhwdjb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="g0ggjib8i"/><path class="kzhwdjb9z"/></g>`,
		"fallback": "humbleicons:times-circle",
	});
}

export default Component;
