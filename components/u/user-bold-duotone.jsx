import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0nhpsynn.css';
import '../../css/b/bxpukbbcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="f0nhpsynn"/><path class="bxpukbbcg"/>`,
		"fallback": "solar:user-bold-duotone",
	});
}

export default Component;
