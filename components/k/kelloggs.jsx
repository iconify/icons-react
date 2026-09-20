import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waihwabln.css';
import '../../css/c/cx6u3ccyv.css';
import '../../css/p/pxkiknbxp.css';
import '../../css/i/iz-n-j-1d.css';

const viewBox = {"width":1000,"height":349.652};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGkLVPNeys"><path class="waihwabln"/></clipPath></defs><g clip-path="url(#SVGkLVPNeys)" transform="matrix(10.3654 0 0 -10.3654 -4991.695 7836.742)" class="cx6u3ccyv"><path class="pxkiknbxp"/><path class="iz-n-j-1d"/></g>`,
		"fallback": "thesvg-color:kelloggs",
	});
}

export default Component;
