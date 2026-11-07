import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ourjeh54g.css';
import '../../css/a/abd5czbav.css';
import '../../css/m/m87qi3nmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ourjeh54g"/><path class="abd5czbav"/><path clip-rule="evenodd" class="m87qi3nmq"/>`,
		"fallback": "solar:rewind-15-seconds-forward-bold-duotone",
	});
}

export default Component;
