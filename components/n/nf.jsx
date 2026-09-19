import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/s/sog97xhua.css';
import '../../css/c/c5n1bc1jx.css';
import '../../css/r/rw6sdlp5q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="sog97xhua"/><path class="c5n1bc1jx"/><path class="rw6sdlp5q"/></g>`,
		"fallback": "circle-flags:nf",
	});
}

export default Component;
