import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/a/av_gk9g6e.css';
import '../../css/c/crcwzxbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="av_gk9g6e"/><path class="crcwzxbsf"/></g>`,
		"fallback": "streamline-cyber:smiley-frown-1",
	});
}

export default Component;
