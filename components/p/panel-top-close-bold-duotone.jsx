import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2z1e_f9o.css';
import '../../css/r/r79bbzbgk.css';
import '../../css/g/gsba024nu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t2z1e_f9o"/><path class="r79bbzbgk"/><path class="gsba024nu"/>`,
		"fallback": "solar:panel-top-close-bold-duotone",
	});
}

export default Component;
