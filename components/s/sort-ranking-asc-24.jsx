import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl4fp4vpe.css';
import '../../css/p/p_sp1no_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl4fp4vpe"/><path clip-rule="evenodd" class="p_sp1no_z"/>`,
		"fallback": "qlementine-icons:sort-ranking-asc-24",
	});
}

export default Component;
