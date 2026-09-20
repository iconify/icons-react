import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/o/oz5j67byf.css';
import '../../css/z/z6b8rybzd.css';
import '../../css/c/cyquzq_sh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="oz5j67byf"/><path class="z6b8rybzd"/><path class="cyquzq_sh"/></g>`,
		"fallback": "streamline-logos:irc-galleria-logo",
	});
}

export default Component;
