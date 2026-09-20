import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/f/f4wj25bdx.css';
import '../../css/c/crcwzxbsf.css';
import '../../css/f/f_i0uquls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="f4wj25bdx"/><path class="crcwzxbsf"/><path class="f_i0uquls"/></g>`,
		"fallback": "streamline-cyber:smiley-thinking",
	});
}

export default Component;
