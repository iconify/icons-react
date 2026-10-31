import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2jlo4bnk.css';
import '../../css/y/y55zcjfsz.css';
import '../../css/t/thi55xbxr.css';
import '../../css/u/uuovyrm_y.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2jlo4bnk"/><path class="y55zcjfsz"/><path class="thi55xbxr"/><path class="uuovyrm_y"/>`,
		"fallback": "tabler-flags:malawi",
	});
}

export default Component;
