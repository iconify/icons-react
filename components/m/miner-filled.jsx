import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef4civ4fj.css';
import '../../css/n/nbf3jcbto.css';
import '../../css/d/dj_zfb5pj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef4civ4fj"/><path clip-rule="evenodd" class="nbf3jcbto"/><path clip-rule="evenodd" class="dj_zfb5pj"/>`,
		"fallback": "bitcoin-icons:miner-filled",
	});
}

export default Component;
