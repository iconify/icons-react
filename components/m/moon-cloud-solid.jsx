import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsebaw_qg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bsebaw_qg"/>`,
		"fallback": "streamline-sharp:moon-cloud-solid",
	});
}

export default Component;
