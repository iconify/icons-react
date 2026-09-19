import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qgjbjjscq.css';
import '../../css/m/mj6dntbum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qgjbjjscq"/><path class="mj6dntbum"/></g>`,
		"fallback": "covid:personal-hygiene-hand-soap-2",
	});
}

export default Component;
