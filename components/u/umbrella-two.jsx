import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/ef37-eb_j.css';
import '../../css/q/qu42yc6im.css';
import '../../css/i/i5b9w52bx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEJ75Vbeb"><g class="wwvp95byt"><path class="ef37-eb_j"/><path class="qu42yc6im"/><path class="i5b9w52bx"/></g></mask></defs><path mask="url(#SVGEJ75Vbeb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:umbrella-two",
	});
}

export default Component;
