import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5sle4ebl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ap3wsxbft.css';
import '../../css/m/m_kz9zbhm.css';
import '../../css/m/mh6khlbtv.css';
import '../../css/s/s2mq98boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5sle4ebl secondary"/><g class="dt0cm9dhy primary"><path class="ap3wsxbft"/><path class="m_kz9zbhm"/><path class="mh6khlbtv"/><path class="s2mq98boy"/></g>`,
		"fallback": "iconaut:pilcrow-left-duo",
	});
}

export default Component;
