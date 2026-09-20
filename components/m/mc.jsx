import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5_3hdchp.css';
import '../../css/v/vlf_obbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i5_3hdchp"/><path class="vlf_obbzr"/>`,
		"fallback": "token:mc",
	});
}

export default Component;
