import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhtyav7tz.css';
import '../../css/k/kvketbp9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhtyav7tz"/><path class="kvketbp9f"/>`,
		"fallback": "tdesign:rice-ball-filled",
	});
}

export default Component;
