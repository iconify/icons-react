import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7o0d5k6d.css';
import '../../css/p/p0-xxqbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7o0d5k6d"/><path class="p0-xxqbxo"/>`,
		"fallback": "streamline-ultimate:phone-actions-merge-bold",
	});
}

export default Component;
