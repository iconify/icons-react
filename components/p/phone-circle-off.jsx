import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/t/tejuo1bjd.css';
import '../../css/k/kv1gi7bvd.css';
import '../../css/f/frzbttk9c.css';
import '../../css/v/vqvhsf28p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="tejuo1bjd"/><path class="kv1gi7bvd"/><path class="frzbttk9c"/><path class="vqvhsf28p"/></g>`,
		"fallback": "streamline-sharp-color:phone-circle-off",
	});
}

export default Component;
