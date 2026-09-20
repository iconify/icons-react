import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2nmz2bly.css';
import '../../css/s/sosvirbjg.css';
import '../../css/p/pu92vnbag.css';
import '../../css/s/sc8qubbfy.css';
import '../../css/f/fbwghxbxl.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b2nmz2bly"/><path clip-rule="evenodd" class="sosvirbjg"/><path clip-rule="evenodd" class="pu92vnbag"/><path clip-rule="evenodd" class="sc8qubbfy"/><path clip-rule="evenodd" class="fbwghxbxl"/></g>`,
		"fallback": "thesvg-color:peerlist",
	});
}

export default Component;
