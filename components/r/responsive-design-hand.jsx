import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zxrigmblq.css';
import '../../css/i/ipx7x1ssi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zxrigmblq"/><path class="ipx7x1ssi"/></g>`,
		"fallback": "streamline-ultimate:responsive-design-hand",
	});
}

export default Component;
