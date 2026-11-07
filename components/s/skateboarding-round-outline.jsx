import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_-x04hkk.css';
import '../../css/l/lo2kz2b5c.css';
import '../../css/r/rtrsrablt.css';
import '../../css/k/kirw6ebyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a_-x04hkk"/><path class="lo2kz2b5c"/><path class="rtrsrablt"/><path clip-rule="evenodd" class="kirw6ebyf"/>`,
		"fallback": "solar:skateboarding-round-outline",
	});
}

export default Component;
