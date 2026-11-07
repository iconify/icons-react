import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbvmhfb9a.css';
import '../../css/e/ete-qkfso.css';
import '../../css/a/adiss9bph.css';
import '../../css/y/y32pobbgx.css';
import '../../css/x/xzy08hf3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbvmhfb9a"/><path class="ete-qkfso"/><path class="adiss9bph"/><path class="y32pobbgx"/><path class="xzy08hf3x"/>`,
		"fallback": "solar:leaf-bold",
	});
}

export default Component;
