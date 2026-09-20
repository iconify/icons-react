import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iebp_9cqm.css';
import '../../css/i/ilr4rab5a.css';
import '../../css/a/a4bu9h0na.css';
import '../../css/p/pskf2nb6x.css';

const viewBox = {"width":32,"height":33};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="iebp_9cqm"><path class="ilr4rab5a"/><path class="a4bu9h0na"/><path class="pskf2nb6x"/></g>`,
		"fallback": "thesvg-color:layers-dark",
	});
}

export default Component;
