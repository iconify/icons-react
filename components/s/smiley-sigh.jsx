import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/d/dme7qxbek.css';
import '../../css/c/crcwzxbsf.css';
import '../../css/s/s2im7n6ap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="dme7qxbek"/><path class="crcwzxbsf"/><path class="s2im7n6ap"/></g>`,
		"fallback": "streamline-cyber:smiley-sigh",
	});
}

export default Component;
