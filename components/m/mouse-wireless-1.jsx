import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yar78jqoe.css';
import '../../css/x/xis3mnypi.css';
import '../../css/r/r0qvtmk7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yar78jqoe"/><path class="xis3mnypi"/><path class="r0qvtmk7o"/></g>`,
		"fallback": "streamline-freehand:mouse-wireless-1",
	});
}

export default Component;
