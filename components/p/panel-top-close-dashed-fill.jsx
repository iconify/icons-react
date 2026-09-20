import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nhmr89v6j.css';
import '../../css/a/a9ur9fbnp.css';
import '../../css/x/xgkv2fbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nhmr89v6j"/><path class="a9ur9fbnp"/><path class="xgkv2fbpx"/></g>`,
		"fallback": "keyline-icons:panel-top-close-dashed-fill",
	});
}

export default Component;
