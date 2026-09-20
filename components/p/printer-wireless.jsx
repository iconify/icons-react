import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lfuti38fr.css';
import '../../css/b/b9b0rvi9w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lfuti38fr"/><path class="b9b0rvi9w"/></g>`,
		"fallback": "streamline-flex:printer-wireless",
	});
}

export default Component;
