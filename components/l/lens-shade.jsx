import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pqbcu6boo.css';
import '../../css/o/og6l3db7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pqbcu6boo"/><path class="og6l3db7m"/></g>`,
		"fallback": "streamline-ultimate:lens-shade",
	});
}

export default Component;
