import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tk3tpbc4k.css';
import '../../css/d/dd4a45hkz.css';
import '../../css/k/k7x45obpf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="tk3tpbc4k"/><path class="dd4a45hkz"/><path class="k7x45obpf"/></g>`,
		"fallback": "catppuccin:maven",
	});
}

export default Component;
