import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vl0sbknne.css';
import '../../css/i/ir6ml4blk.css';
import '../../css/a/anbnfobac.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVlQBebkA"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="vl0sbknne"/><path class="ir6ml4blk"/><path clip-rule="evenodd" class="anbnfobac"/></g></mask></defs><path mask="url(#SVGVlQBebkA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:painted-eggshell",
	});
}

export default Component;
