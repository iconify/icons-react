import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-bib9iuo.css';
import '../../css/u/u2_or7bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-bib9iuo"/><path clip-rule="evenodd" class="u2_or7bit"/>`,
		"fallback": "lineicons:tab",
	});
}

export default Component;
