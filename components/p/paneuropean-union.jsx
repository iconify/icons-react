import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piivihhtn.css';
import '../../css/i/i28mt_bch.css';
import '../../css/c/cwdx-acsy.css';
import '../../css/g/greuegb1f.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piivihhtn"/><path class="i28mt_bch"/><path class="cwdx-acsy"/><path class="greuegb1f"/>`,
		"fallback": "tabler-flags:paneuropean-union",
	});
}

export default Component;
