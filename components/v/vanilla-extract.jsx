import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoeyw0blc.css';
import '../../css/h/hg2rozmww.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoeyw0blc"/><path class="hg2rozmww"/>`,
		"fallback": "catppuccin:vanilla-extract",
	});
}

export default Component;
