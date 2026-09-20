import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qea20536a.css';
import '../../css/u/u1ts3dbke.css';
import '../../css/z/z2w67ghwc.css';
import '../../css/k/kfztbhshm.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGxUOMRb3d" x1="99.991%" x2=".01%" y1="-.011%" y2="100.01%"><stop offset=".344%" class="qea20536a"/><stop offset="46.89%" class="u1ts3dbke"/><stop offset="100%" class="z2w67ghwc"/></linearGradient></defs><path fill="url(#SVGxUOMRb3d)" class="kfztbhshm"/>`,
		"fallback": "thesvg-color:kotlin",
	});
}

export default Component;
