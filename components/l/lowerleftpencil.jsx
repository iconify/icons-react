import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slmaarbqj.css';
import '../../css/f/f9a6e-urt.css';
import '../../css/z/zopstib4z.css';
import '../../css/i/ilkt83bie.css';
import '../../css/z/z83bc-vox.css';
import '../../css/o/o3pzgdq8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slmaarbqj"/><path class="f9a6e-urt"/><path class="zopstib4z"/><path class="ilkt83bie"/><path class="z83bc-vox"/><path class="o3pzgdq8j"/>`,
		"fallback": "fxemoji:lowerleftpencil",
	});
}

export default Component;
