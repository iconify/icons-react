import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xr6lt4bch.css';
import '../../css/l/lzmkr4bin.css';
import '../../css/y/y9w961b7d.css';
import '../../css/a/a36zse7hg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xr6lt4bch"/><path class="lzmkr4bin"/><path class="y9w961b7d"/><path class="a36zse7hg"/></g>`,
		"fallback": "covid:social-distancing-correct-5",
	});
}

export default Component;
