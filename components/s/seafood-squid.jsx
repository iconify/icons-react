import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vz5j29btj.css';
import '../../css/d/d179-xbow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vz5j29btj"/><path class="d179-xbow"/></g>`,
		"fallback": "streamline-ultimate:seafood-squid",
	});
}

export default Component;
