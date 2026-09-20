import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8a58u7ck.css';
import '../../css/l/lw9qbabax.css';
import '../../css/f/fq7kcxiwl.css';
import '../../css/g/gqlpjnibd.css';
import '../../css/x/xppy41w3j.css';

const viewBox = {"width":100,"height":100,"top":-33.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8a58u7ck"/><path class="lw9qbabax"/><path class="fq7kcxiwl"/><path class="gqlpjnibd"/><path class="xppy41w3j"/>`,
		"fallback": "thesvg-color:lutece",
	});
}

export default Component;
