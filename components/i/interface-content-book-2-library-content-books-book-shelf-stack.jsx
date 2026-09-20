import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qxx06lb9u.css';
import '../../css/r/rle9fyo4y.css';
import '../../css/p/psl9hvbey.css';
import '../../css/c/co15anbqk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="qxx06lb9u"/><rect class="rle9fyo4y"/><rect transform="rotate(-14.05 10.779 7.795)" class="psl9hvbey"/><path class="co15anbqk"/></g>`,
		"fallback": "streamline:interface-content-book-2-library-content-books-book-shelf-stack",
	});
}

export default Component;
