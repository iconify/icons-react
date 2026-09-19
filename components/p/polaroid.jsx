import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n698k3tnz.css';
import '../../css/b/b61zg357c.css';
import '../../css/p/pzlox1b4n.css';
import '../../css/z/zwg4zdeuv.css';
import '../../css/g/gkt9qdt-a.css';
import '../../css/g/g45m4w_wx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="n698k3tnz"/><path clip-rule="evenodd" class="b61zg357c"/><path clip-rule="evenodd" class="pzlox1b4n"/><path clip-rule="evenodd" class="zwg4zdeuv"/><path class="gkt9qdt-a"/><path class="g45m4w_wx"/></g>`,
		"fallback": "glyphs-poly:polaroid",
	});
}

export default Component;
