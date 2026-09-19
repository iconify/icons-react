import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuguap3fc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuguap3fc"/>`,
		"fallback": "catppuccin:nuget",
	});
}

export default Component;
