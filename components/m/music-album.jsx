import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl_hn_bpe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl_hn_bpe"/>`,
		"fallback": "zondicons:music-album",
	});
}

export default Component;
