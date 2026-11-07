import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf34h9jbx.css';
import '../../css/y/ypo27hbxa.css';
import '../../css/k/kfd5w9qxs.css';
import '../../css/y/yyc8v2bch.css';
import '../../css/w/w3n7fxbuc.css';
import '../../css/r/rmy-f-bvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf34h9jbx"/><path class="ypo27hbxa"/><path class="kfd5w9qxs"/><path class="yyc8v2bch"/><path class="w3n7fxbuc"/><path clip-rule="evenodd" class="rmy-f-bvz"/>`,
		"fallback": "solar:rocket-2-outline",
	});
}

export default Component;
