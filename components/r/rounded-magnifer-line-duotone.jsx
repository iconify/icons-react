import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/p/pt9xvrdoi.css';
import '../../css/j/jg8dx-bfh.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJtoKmeBk"><g class="k2u665ban"><circle class="pt9xvrdoi"/><path class="jg8dx-bfh"/></g></mask></defs><path mask="url(#SVGJtoKmeBk)" class="w49j0rbvv"/>`,
		"fallback": "solar:rounded-magnifer-line-duotone",
	});
}

export default Component;
