import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt9cu234p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt9cu234p"/>`,
		"fallback": "noviair:panel-bottom",
	});
}

export default Component;
