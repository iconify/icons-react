import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6x784t-a.css';
import '../../css/z/z2lg6u2gl.css';
import '../../css/r/rj5nmqbtj.css';
import '../../css/k/k7a_rqnoj.css';
import '../../css/p/pqbp2bdrz.css';

const viewBox = {"width":256,"height":257};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6x784t-a"/><path class="z2lg6u2gl"/><path class="rj5nmqbtj"/><path class="k7a_rqnoj"/><path class="pqbp2bdrz"/>`,
		"fallback": "thesvg-color:jwt",
	});
}

export default Component;
