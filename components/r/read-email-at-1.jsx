import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/swe-3q-nj.css';
import '../../css/i/i2ve4-mmr.css';
import '../../css/z/zx8_9wx0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="swe-3q-nj"/><path class="i2ve4-mmr"/><path class="zx8_9wx0a"/></g>`,
		"fallback": "streamline-ultimate:read-email-at-1",
	});
}

export default Component;
