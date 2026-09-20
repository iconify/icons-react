import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-e92pebk.css';
import '../../css/b/behv4qxvs.css';
import '../../css/p/pu3w9bnvw.css';
import '../../css/m/mii0xabzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-e92pebk"/><path class="behv4qxvs"/><path class="pu3w9bnvw"/><path class="mii0xabzm"/>`,
		"fallback": "token:itp",
	});
}

export default Component;
