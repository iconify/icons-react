import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnyxyabef.css';
import '../../css/v/vwsblbbqy.css';
import '../../css/s/s3m1l3b4t.css';
import '../../css/y/ytx155bjx.css';
import '../../css/u/u7mfpjuoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnyxyabef"/><path class="vwsblbbqy"/><path class="s3m1l3b4t"/><path class="ytx155bjx"/><path clip-rule="evenodd" class="u7mfpjuoc"/>`,
		"fallback": "solar:notebook-bookmark-outline",
	});
}

export default Component;
