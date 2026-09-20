import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/y/ye153mmgp.css';
import '../../css/c/crcwzxbsf.css';
import '../../css/i/iy4b5wbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="ye153mmgp"/><path class="crcwzxbsf"/><path class="iy4b5wbeh"/></g>`,
		"fallback": "streamline-cyber:smiley-angry-2",
	});
}

export default Component;
