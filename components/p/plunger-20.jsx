import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbyoeqbxo.css';
import '../../css/v/vp_3b7bmf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbyoeqbxo"/><path class="vp_3b7bmf"/>`,
		"fallback": "energy-icons:plunger-20",
	});
}

export default Component;
