import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw5-6um0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aw5-6um0w"/>`,
		"fallback": "sidekickicons:pilcrow-solid",
	});
}

export default Component;
