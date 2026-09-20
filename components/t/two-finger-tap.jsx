import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/s1so2xv2q.css';
import '../../css/c/c-m42hblv.css';
import '../../css/v/v7we92bqv.css';
import '../../css/g/gg3c-acyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="s1so2xv2q"/><path class="c-m42hblv"/><path class="v7we92bqv"/><path class="gg3c-acyh"/></g>`,
		"fallback": "streamline-sharp-color:two-finger-tap",
	});
}

export default Component;
