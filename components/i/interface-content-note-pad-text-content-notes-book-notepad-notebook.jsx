import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ozr44rbcf.css';
import '../../css/v/vnldo1btk.css';
import '../../css/l/lzqai377z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ozr44rbcf"/><rect class="vnldo1btk"/><path class="lzqai377z"/></g>`,
		"fallback": "streamline:interface-content-note-pad-text-content-notes-book-notepad-notebook",
	});
}

export default Component;
