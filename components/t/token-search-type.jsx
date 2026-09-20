import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgxaq2bcw.css';
import '../../css/w/wa_kvdvqj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgxaq2bcw"/><path clip-rule="evenodd" class="wa_kvdvqj"/>`,
		"fallback": "oui:token-search-type",
	});
}

export default Component;
