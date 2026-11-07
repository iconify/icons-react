import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu-cc3sah.css';
import '../../css/h/htk2wgbva.css';
import '../../css/v/vm55ygbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu-cc3sah"/><path class="htk2wgbva"/><path class="vm55ygbgc"/>`,
		"fallback": "solar:rewind-back-circle-bold-duotone",
	});
}

export default Component;
