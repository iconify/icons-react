import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t742n7ygc.css';
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
		"content": `<g class="t742n7ygc"><path class="ilr4rab5a"/><path class="a4bu9h0na"/><path class="pskf2nb6x"/></g>`,
		"fallback": "thesvg-color:layers-light",
	});
}

export default Component;
