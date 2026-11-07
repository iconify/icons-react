import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrxlgg64z.css';
import '../../css/i/i6gu3rbfq.css';
import '../../css/z/zxzmymb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hrxlgg64z"/><path class="i6gu3rbfq"/><path class="zxzmymb5g"/>`,
		"fallback": "solar:pen-new-round-bold-duotone",
	});
}

export default Component;
