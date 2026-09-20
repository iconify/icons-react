import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d37y3xbtx.css';
import '../../css/m/m55tlb_gu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d37y3xbtx"/><path class="m55tlb_gu"/></g>`,
		"fallback": "streamline-ultimate:radiology-scan-doctor",
	});
}

export default Component;
