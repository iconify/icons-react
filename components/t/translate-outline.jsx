import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joxurxbtg.css';
import '../../css/p/p0sim5hxc.css';
import '../../css/c/cfmfgyb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="joxurxbtg"/><path clip-rule="evenodd" class="p0sim5hxc"/><path clip-rule="evenodd" class="cfmfgyb-p"/>`,
		"fallback": "cuida:translate-outline",
	});
}

export default Component;
