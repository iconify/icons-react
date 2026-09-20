import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7u5wob7z.css';
import '../../css/h/h5e5is1_w.css';
import '../../css/i/ipg2vo4ij.css';
import '../../css/v/vpeuh8bzd.css';
import '../../css/k/ki2-2db_j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGusHLBeIB" x1="256" x2="256" y1="415.265" y2="1.547" gradientTransform="matrix(1 0 0 -1 0 513.547)" gradientUnits="userSpaceOnUse"><stop offset="0" class="g7u5wob7z"/><stop offset="1" class="h5e5is1_w"/></linearGradient><path fill="url(#SVGusHLBeIB)" class="ipg2vo4ij"/><path class="vpeuh8bzd"/><path class="ki2-2db_j"/>`,
		"fallback": "selfhst:minthcm",
	});
}

export default Component;
