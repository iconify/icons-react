import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3qhlqbpb.css';
import '../../css/o/orw_unb7m.css';
import '../../css/p/pz--szspj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3qhlqbpb"/><path class="orw_unb7m"/><path class="pz--szspj"/>`,
		"fallback": "token:mmy",
	});
}

export default Component;
