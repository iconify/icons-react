import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9pytbryk.css';
import '../../css/k/kuf42lb8e.css';
import '../../css/r/rwa9wmb3w.css';

const viewBox = {"width":95.686,"height":104.463};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<clipPath id="SVGxhBU85ZH"><path class="h9pytbryk"/></clipPath><g clip-path="url(#SVGxhBU85ZH)" transform="translate(-37.088 -18.94)" class="kuf42lb8e"><path class="rwa9wmb3w"/></g>`,
		"fallback": "thesvg-color:owncast-light",
	});
}

export default Component;
