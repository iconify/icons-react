import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/jearahxhl.css';
import '../../css/b/bzg8--bit.css';
import '../../css/k/k5kbleb1j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGs3lzBemP"><g class="v3_i3wktz"><path class="jearahxhl"/><path clip-rule="evenodd" class="bzg8--bit"/><path class="k5kbleb1j"/></g></mask></defs><path mask="url(#SVGs3lzBemP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:printer",
	});
}

export default Component;
