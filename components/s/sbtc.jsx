import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1o8yjukt.css';
import '../../css/d/dnt094bzl.css';
import '../../css/b/bxg6g4bsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1o8yjukt"/><path class="dnt094bzl"/><path clip-rule="evenodd" class="bxg6g4bsw"/>`,
		"fallback": "token:sbtc",
	});
}

export default Component;
