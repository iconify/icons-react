import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a1tlu_bkd.css';
import '../../css/y/ye7sbfbsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a1tlu_bkd"/><path class="ye7sbfbsd"/></g>`,
		"fallback": "streamline-ultimate:share-location-hand-1",
	});
}

export default Component;
