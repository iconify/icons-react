import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi2hptddu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pi2hptddu"/>`,
		"fallback": "pajamas:mobile-issue-close",
	});
}

export default Component;
