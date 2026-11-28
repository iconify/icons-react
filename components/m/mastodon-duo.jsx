import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f93zup36c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dahxw4bbt.css';
import '../../css/k/k1whppbep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f93zup36c secondary"/><g class="dt0cm9dhy primary"><path class="dahxw4bbt"/><path class="k1whppbep"/></g>`,
		"fallback": "iconaut:mastodon-duo",
	});
}

export default Component;
