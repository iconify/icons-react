import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sz2gx2bvd.css';
import '../../css/r/rs99zlbon.css';
import '../../css/e/e0u3qtbzv.css';
import '../../css/z/zs843lqwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sz2gx2bvd"/><path class="rs99zlbon"/><path class="e0u3qtbzv"/><path class="zs843lqwx"/></g>`,
		"fallback": "keyline-icons:octagon-alert-two-tone",
	});
}

export default Component;
