import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r31v6djmg.css';
import '../../css/h/h8wl53bui.css';
import '../../css/c/c7y1ahbub.css';
import '../../css/p/p-n5subdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r31v6djmg"/><path class="h8wl53bui"/><path class="c7y1ahbub"/><path class="p-n5subdr"/>`,
		"fallback": "uim:slack-alt",
	});
}

export default Component;
