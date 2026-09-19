import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/u4d5nhbqb.css';
import '../../css/a/afnfswcvd.css';
import '../../css/m/md3v46buq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="u4d5nhbqb"/><path class="afnfswcvd"/><path class="md3v46buq"/></g>`,
		"fallback": "icon-park-outline:monkey-zodiac",
	});
}

export default Component;
