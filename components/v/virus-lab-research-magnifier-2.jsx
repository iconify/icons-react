import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hu8uf7hxg.css';
import '../../css/x/xf1x-utxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hu8uf7hxg"/><path class="xf1x-utxn"/></g>`,
		"fallback": "covid:virus-lab-research-magnifier-2",
	});
}

export default Component;
