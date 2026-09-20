import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z84met-5h.css';
import '../../css/n/nr3dqcmlz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z84met-5h"/><path class="nr3dqcmlz"/>`,
		"fallback": "streamline-pixel:interface-essential-cog-browser",
	});
}

export default Component;
