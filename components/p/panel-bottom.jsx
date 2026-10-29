import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/e/eq2lhmikm.css';
import '../../css/g/gtll1_64n.css';
import '../../css/q/qskb1ygub.css';
import '../../css/u/uk7ndnb4g.css';
import '../../css/i/iifqig7rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="eq2lhmikm"/><path class="gtll1_64n"/><path class="qskb1ygub wm-shine"/><path class="uk7ndnb4g wm-deco"/><path class="iifqig7rj wm-deco"/></g>`,
		"fallback": "withicons-sticker:panel-bottom",
	});
}

export default Component;
