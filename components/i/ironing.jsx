import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttzz6hdgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttzz6hdgs"/>`,
		"fallback": "tabler:ironing",
	});
}

export default Component;
