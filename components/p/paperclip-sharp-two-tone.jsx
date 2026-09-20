import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_vehl7vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_vehl7vc"/>`,
		"fallback": "keyline-icons:paperclip-sharp-two-tone",
	});
}

export default Component;
