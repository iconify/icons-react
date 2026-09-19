import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/j/j4cvtu_gj.css';
import '../../css/k/kagyhebbk.css';
import '../../css/p/p6kiyzb2b.css';
import '../../css/o/o2ilxycix.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGvk1SqcgB"><g class="hv130ab-t"><path class="j4cvtu_gj"/><path class="kagyhebbk"/><circle class="p6kiyzb2b"/><path class="o2ilxycix"/></g></mask></defs><path mask="url(#SVGvk1SqcgB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:permissions",
	});
}

export default Component;
