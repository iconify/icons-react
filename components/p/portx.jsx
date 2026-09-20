import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmtz-erdo.css';
import '../../css/z/z9hdrkb6h.css';
import '../../css/v/vzqbsgpvh.css';
import '../../css/e/e23x2926m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zmtz-erdo"/><path clip-rule="evenodd" class="z9hdrkb6h"/><path class="vzqbsgpvh"/><path clip-rule="evenodd" class="e23x2926m"/>`,
		"fallback": "token:portx",
	});
}

export default Component;
