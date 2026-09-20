import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/v70udttoz.css';
import '../../css/j/jwbffw10i.css';
import '../../css/x/xg567nb4k.css';
import '../../css/u/uyopdksfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="v70udttoz"/><path class="jwbffw10i"/><path class="xg567nb4k"/><path class="uyopdksfk"/></g>`,
		"fallback": "streamline-cyber:synchronize-lock-encrypt-1",
	});
}

export default Component;
