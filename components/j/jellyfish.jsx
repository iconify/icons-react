import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/maox2bkih.css';
import '../../css/o/o_u3gc25v.css';
import '../../css/w/w_0ig1bcw.css';
import '../../css/y/yoy5mzbkg.css';
import '../../css/c/chbcmx24t.css';
import '../../css/j/jlzrqnb_h.css';
import '../../css/d/d8g70pbvb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="maox2bkih"/><path clip-rule="evenodd" class="o_u3gc25v"/><path class="w_0ig1bcw"/><path clip-rule="evenodd" class="yoy5mzbkg"/><path clip-rule="evenodd" class="chbcmx24t"/><path clip-rule="evenodd" class="jlzrqnb_h"/><path clip-rule="evenodd" class="d8g70pbvb"/></g>`,
		"fallback": "fluent-emoji-flat:jellyfish",
	});
}

export default Component;
