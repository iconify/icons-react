import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qea20536a.css';
import '../../css/u/u1ts3dbke.css';
import '../../css/z/z2w67ghwc.css';
import '../../css/s/sk047ybau.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVG1miIGGch" x1="500.003" x2="-.097" y1="579.106" y2="1079.206" gradientTransform="translate(15.534 -96.774)scale(.1939)" gradientUnits="userSpaceOnUse"><stop offset=".003" class="qea20536a"/><stop offset=".469" class="u1ts3dbke"/><stop offset="1" class="z2w67ghwc"/></linearGradient></defs><path fill="url(#SVG1miIGGch)" class="sk047ybau"/>`,
		"fallback": "devicon:kotlin",
	});
}

export default Component;
