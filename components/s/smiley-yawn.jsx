import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/c/crcwzxbsf.css';
import '../../css/c/cztw9pcrq.css';
import '../../css/c/c9jjrobsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="crcwzxbsf"/><path class="cztw9pcrq"/><path class="c9jjrobsp"/></g>`,
		"fallback": "streamline-cyber:smiley-yawn",
	});
}

export default Component;
