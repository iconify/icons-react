import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h0cjc2oci.css';
import '../../css/q/qaic4dakn.css';
import '../../css/g/gf6q-rxoe.css';
import '../../css/a/at7jlpcci.css';
import '../../css/y/yz4665bbg.css';
import '../../css/j/joty_yrzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="h0cjc2oci wm-shadow"/><path class="qaic4dakn"/><path class="gf6q-rxoe"/><path class="at7jlpcci"/><path class="wm-shine yz4665bbg"/><path class="joty_yrzs wm-deco"/></g>`,
		"fallback": "withicons-sticker:sort-alpha",
	});
}

export default Component;
