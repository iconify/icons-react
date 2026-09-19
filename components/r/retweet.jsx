import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yolb2c1_c.css';
import '../../css/r/rvcb4bedk.css';
import '../../css/y/y-7m_e66k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yolb2c1_c"/><path class="rvcb4bedk"/><path class="y-7m_e66k"/>`,
		"fallback": "ei:retweet",
	});
}

export default Component;
