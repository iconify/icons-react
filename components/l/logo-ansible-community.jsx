import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icdmmo27p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icdmmo27p"/>`,
		"fallback": "carbon:logo-ansible-community",
	});
}

export default Component;
