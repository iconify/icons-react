import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdoiz26ay.css';
import '../../css/t/tc6em5bpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdoiz26ay"/><path class="tc6em5bpi"/>`,
		"fallback": "token:mdt",
	});
}

export default Component;
