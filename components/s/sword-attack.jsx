import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/wefv-0bjb.css';
import '../../css/z/zm0iaj-bn.css';
import '../../css/t/td4s3td9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="wefv-0bjb"/><path class="zm0iaj-bn"/><path class="td4s3td9d"/></g>`,
		"fallback": "streamline-sharp-color:sword-attack",
	});
}

export default Component;
