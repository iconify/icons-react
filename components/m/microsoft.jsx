import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c97awnbuk.css';
import '../../css/j/jlqq20lvs.css';
import '../../css/y/yq2qxybxe.css';
import '../../css/r/rx_11zbpa.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c97awnbuk"/><path class="jlqq20lvs"/><path class="yq2qxybxe"/><path class="rx_11zbpa"/>`,
		"fallback": "thesvg-color:microsoft",
	});
}

export default Component;
