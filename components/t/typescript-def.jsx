import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/r/r29e52ykz.css';
import '../../css/k/kgx6i7brh.css';
import '../../css/m/mlnvvshov.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="r29e52ykz"/><path class="kgx6i7brh"/><path class="mlnvvshov"/></g>`,
		"fallback": "catppuccin:typescript-def",
	});
}

export default Component;
