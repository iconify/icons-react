import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/a/ah33g_b8l.css';
import '../../css/c/crcwzxbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="ah33g_b8l"/><path class="crcwzxbsf"/></g>`,
		"fallback": "streamline-cyber:smiley-smile-11",
	});
}

export default Component;
