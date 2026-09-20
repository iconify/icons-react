import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yplq3altk.css';
import '../../css/l/lv5vqbcpw.css';
import '../../css/y/yltxbdb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yplq3altk"/><path class="lv5vqbcpw"/><path class="yltxbdb9x"/></g>`,
		"fallback": "streamline-ultimate:saving-bank-international",
	});
}

export default Component;
