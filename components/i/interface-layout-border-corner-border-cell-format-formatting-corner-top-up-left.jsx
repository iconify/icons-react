import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3tf_jmrh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3tf_jmrh"/>`,
		"fallback": "streamline:interface-layout-border-corner-border-cell-format-formatting-corner-top-up-left",
	});
}

export default Component;
