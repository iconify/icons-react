import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7t-hgd4w.css';
import '../../css/r/ronlp2bmc.css';
import '../../css/t/twyxbjpff.css';
import '../../css/y/yrb5ix9ih.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="y7t-hgd4w"/><circle class="ronlp2bmc"/><path class="twyxbjpff"/><path class="yrb5ix9ih"/>`,
		"fallback": "carbon:mixed-rain-hail",
	});
}

export default Component;
