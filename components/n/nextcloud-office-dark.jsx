import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf79mvbno.css';
import '../../css/n/nq01l99qg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uf79mvbno"/><path clip-rule="evenodd" class="nq01l99qg"/>`,
		"fallback": "selfhst:nextcloud-office-dark",
	});
}

export default Component;
