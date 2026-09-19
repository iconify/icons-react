import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f67w_d5_u.css';
import '../../css/o/ob7unl9js.css';
import '../../css/f/fqcyasbva.css';
import '../../css/y/yjkgmbcuu.css';
import '../../css/s/sil8tlbni.css';
import '../../css/s/s5cj0o04d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f67w_d5_u"/><path class="ob7unl9js"/><path clip-rule="evenodd" class="fqcyasbva"/><path clip-rule="evenodd" class="yjkgmbcuu"/><path class="sil8tlbni"/><path clip-rule="evenodd" class="s5cj0o04d"/></g>`,
		"fallback": "glyphs:sad-cry-outline",
	});
}

export default Component;
