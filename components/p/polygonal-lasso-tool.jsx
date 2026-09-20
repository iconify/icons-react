import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/afbu4abru.css';
import '../../css/i/i1nrbeb_w.css';
import '../../css/i/i_yw9nbru.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="afbu4abru"/><path class="i1nrbeb_w"/><path class="i_yw9nbru"/></g>`,
		"fallback": "streamline-flex:polygonal-lasso-tool",
	});
}

export default Component;
