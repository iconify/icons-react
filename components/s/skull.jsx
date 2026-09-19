import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aw-cmtbxz.css';
import '../../css/u/u3qkv6btp.css';
import '../../css/s/smde8tpuu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aw-cmtbxz"/><path class="u3qkv6btp"/><path class="smde8tpuu"/></g>`,
		"fallback": "fluent-emoji-flat:skull",
	});
}

export default Component;
