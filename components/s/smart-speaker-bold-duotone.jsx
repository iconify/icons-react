import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6evqk7gs.css';
import '../../css/a/a7r2o1pkb.css';
import '../../css/u/uj188tbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6evqk7gs"/><path clip-rule="evenodd" class="a7r2o1pkb"/><path class="uj188tbka"/>`,
		"fallback": "solar:smart-speaker-bold-duotone",
	});
}

export default Component;
