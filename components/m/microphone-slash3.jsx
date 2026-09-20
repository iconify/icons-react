import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c839fkb0p.css';
import '../../css/s/s8vnbc09s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c839fkb0p"/><path class="s8vnbc09s"/></g>`,
		"fallback": "reicon:microphone-slash3",
	});
}

export default Component;
