import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iig0ngsil.css';
import '../../css/f/f3oom5dbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iig0ngsil"/><path class="f3oom5dbo"/>`,
		"fallback": "stash:save-ribbon-duotone",
	});
}

export default Component;
