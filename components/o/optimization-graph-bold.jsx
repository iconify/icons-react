import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts8762bta.css';
import '../../css/a/au3jsqbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts8762bta"/><path class="au3jsqbhl"/>`,
		"fallback": "streamline-ultimate:optimization-graph-bold",
	});
}

export default Component;
