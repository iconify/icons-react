import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1aa_bxoc.css';
import '../../css/v/vibuei4ne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1aa_bxoc"/><path class="vibuei4ne"/>`,
		"fallback": "tdesign:mobile-blocked-filled",
	});
}

export default Component;
