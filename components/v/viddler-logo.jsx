import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/a/a2bw0tbne.css';
import '../../css/l/l-kw7el3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="a2bw0tbne"/><path class="l-kw7el3l"/></g>`,
		"fallback": "streamline-logos:viddler-logo",
	});
}

export default Component;
